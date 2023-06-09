from flask import Flask, render_template, request, jsonify
import numpy as np
import pandas as pd
from numpy import dot
from numpy.linalg import norm
from sentence_transformers import SentenceTransformer

app = Flask(__name__)

# 데이터 로드
train_data = pd.read_csv("/content/drive/MyDrive/Vat_QnA.csv")
embeddings = train_data["embedding"]
# 모델 로드
model = SentenceTransformer(
    "sentence-transformers/xlm-r-100langs-bert-base-nli-stsb-mean-tokens"
)


@app.route("/")
def home():
    return render_template("home.html")


@app.route("/get_bot_message", methods=["POST"])
def get_bot_message():
    user_message = request.form["userMessage"]  # userMessage 받아오기
    bot_message = return_answer(user_message)
    return jsonify({"botMessage": bot_message})  # 답변을 JSON 형태로 반환


def cos_sim(A, B):
    return dot(A, B) / (norm(A) * norm(B))


def return_answer(question):
    embedding = model.encode(question)
    train_data["score"] = train_data.apply(
        lambda x: cos_sim(x["embedding"], embedding), axis=1
    )
    return train_data.loc[train_data["score"].idxmax()]["answer"]


if __name__ == "__main__":
    app.run()
