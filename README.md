# Animal Medical Chatbot

The Animal Medical Chatbot is an AI-powered conversational agent designed to provide information and assistance related to animal health and veterinary care. It utilizes advanced natural language processing (NLP) techniques and sentence embeddings to understand user questions and provide accurate and relevant answers.

## Features
- **Question Answering:** Ask the chatbot about various animal health concerns, symptoms, treatments, and more. Get informative answers based on a comprehensive knowledge base.
- **Diagnosis Assistance:** Describe animal symptoms, and the chatbot will provide potential diagnoses or recommendations for further veterinary evaluation.
- **Medical Data Encoding:** The chatbot encodes the input question using a pre-trained language model (XLM-R) to generate high-dimensional sentence embeddings.
- **Semantic Similarity:** The chatbot calculates the cosine similarity between the encoded question and pre-computed embeddings of the training data to find the most relevant answer.
- **GPU Acceleration:** Utilizes GPU acceleration for faster encoding and similarity calculations.

## How It Works
1. **Data Preparation:** The chatbot loads a dataset of animal medical questions and answers.
2. **Sentence Encoding:** Questions in the dataset are encoded into high-dimensional vectors using the XLM-R SentenceTransformer model.
3. **Similarity Calculation:** When a user asks a question, the chatbot encodes the input question and calculates its cosine similarity with pre-computed embeddings of the training data.
4. **Answer Retrieval:** The chatbot retrieves the most similar answer based on the calculated similarity score.
5. **User Interaction:** Users can interact with the chatbot by asking questions and receiving informative answers in real-time.

This Animal Medical Chatbot provides a convenient and accessible way to obtain animal health information and assistance. It aims to assist pet owners, animal enthusiasts, and veterinary professionals in finding reliable answers to their medical inquiries.
