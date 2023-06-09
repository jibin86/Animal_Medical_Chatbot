from flask import Flask, render_template, request, jsonify
import numpy as np
import pandas as pd
from numpy import dot
from numpy.linalg import norm
from sentence_transformers import SentenceTransformer

app = Flask(__name__)

data_path = 'Vat_QnA_embedding_final.csv'
# 데이터 로드
train_data = pd.read_csv(data_path)
embeddings = train_data["embedding"].apply(lambda x: np.fromstring(x[1:-1], sep=' '))
embeddings = np.vstack(embeddings)
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


# def cos_sim(A, B):
#     return dot(A, B) / (norm(A) * norm(B))


def return_answer(question):
    embedding = model.encode(question)
    embedding = embedding.reshape(1, -1)  # 형태 변환: (n,) -> (1, n)
    scores = dot(embeddings, embedding.T) / (norm(embeddings, axis=1) * norm(embedding)).reshape(-1, 1)
    max_score_index = np.argmax(scores)
    return train_data.loc[max_score_index]["answer"]



if __name__ == "__main__":
    app.run()
