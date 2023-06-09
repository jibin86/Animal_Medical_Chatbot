# Animal Medical Chatbot

The Animal Medical Chatbot is an AI-powered conversational agent designed to provide information and assistance related to animal health and veterinary care. It utilizes advanced natural language processing (NLP) techniques and sentence embeddings to understand user questions and provide accurate and relevant answers.

## Features
- **Question Answering:** Ask the chatbot about various animal health concerns, symptoms, treatments, and more. Get informative answers based on a comprehensive knowledge base.
- **Diagnosis Assistance:** Describe animal symptoms, and the chatbot will provide potential diagnoses or recommendations for further veterinary evaluation.
- **Medical Data Encoding:** The chatbot encodes the input question using a pre-trained language model (XLM-R) to generate high-dimensional sentence embeddings.
- **Semantic Similarity:** The chatbot calculates the cosine similarity between the encoded question and pre-computed embeddings of the training data to find the most relevant answer.

## How It Works
1. **Data Preparation:** The chatbot loads a dataset of animal medical questions and answers.
2. **Sentence Encoding:** Questions in the dataset are encoded into high-dimensional vectors using the XLM-R SentenceTransformer model.
3. **Similarity Calculation:** When a user asks a question, the chatbot encodes the input question and calculates its cosine similarity with pre-computed embeddings of the training data.
4. **Answer Retrieval:** The chatbot retrieves the most similar answer based on the calculated similarity score.
5. **User Interaction:** Users can interact with the chatbot by asking questions and receiving informative answers in real-time.

This Animal Medical Chatbot provides a convenient and accessible way to obtain animal health information and assistance. It aims to assist pet owners, animal enthusiasts, and veterinary professionals in finding reliable answers to their medical inquiries.

## Usage
To use the Animal Medical Chatbot:

1. Clone the repository and navigate to the project directory.

2. Ensure you have the required dependencies installed. You can install them using pip:

   ```
   pip install flask numpy pandas sentence-transformers
   ```

3. Prepare the data:
   - Place the `Vat_QnA_embedding_final.csv` file in the project directory. This file contains the pre-trained embeddings for the question-answer pairs used by the chatbot.

4. Run the application:
   - Open a terminal or command prompt and run the following command:

     ```
     python app.py
     ```

   - The Flask web server will start running locally.

5. Access the chatbot:
   - Open a web browser and navigate to `http://localhost:5000`.

   - You will see a chat interface where you can interact with the chatbot.

6. Interact with the chatbot:
   - Type your question or message in the input box and click the "Send" button or press Enter.

   - The chatbot will process your message and provide a response based on the pre-trained model.

   - The conversation will be displayed in the chat window, with your messages on the right side and the chatbot's responses on the left side.

7. Customize the chatbot:
   - You can customize the chatbot by modifying the data, the pre-trained model, or the chatbot logic in the `app.py` file.

8. Stop the chatbot:
   - To stop the chatbot application, you can press Ctrl+C in the terminal or command prompt.