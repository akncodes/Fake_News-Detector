# 📰 Fake News Detector

A machine learning-powered web application that classifies news as **real** or **fake** using natural language processing and a PassiveAggressiveClassifier model. It features a **React.js frontend** and a **Flask-based backend** serving a trained ML model.

---

## 🚀 Project Overview

Fake news has become a major issue in the digital age. This project is an end-to-end solution to help users verify the authenticity of news articles using a machine learning model trained on a dataset of real and fake news.

---

## 🧠 Tech Stack

### 🗂️ Overall Architecture

- **Frontend:** React.js
- **Backend:** Flask (Python)
- **Model:** PassiveAggressiveClassifier with TF-IDF vectorizer (Scikit-learn)
- **Communication:** REST API (`/predict`)
- **Deployment-ready:** Easily deployable on Render (backend) and Vercel/Netlify (frontend)

---

### 🔧 Backend – Tech Stack

- **Python 3**
- **Flask** – For building REST API
- **Flask-CORS** – To enable communication with frontend
- **Scikit-learn** – ML model (PassiveAggressiveClassifier)
- **Pandas** – Data loading and manipulation
- **Pickle** – Model and vectorizer serialization

### 🎨 Frontend – Tech Stack
**React.js – Component-based UI**

**JavaScript (ES6+)**

**Tailwind CSS – Styling**

1. **Clone the repository**
   <pre lang="markdown"> bash 
      git clone https://github.com/akncodes/Fake_News-Detector.git
      cd Fake_News-Detector </pre>

2. Set up a virtual environment (recommended)
   <pre lang="markdown"> bash 
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate </pre>
   
3.Install the required dependencies
    <pre lang="markdown"> bash 
   pip install -r requirements.txt</pre>
   
4.🚀 Run Frontend Locally
    <pre lang="markdown"> bash 
   cd Frontend
  npm install
  npm start</pre>
  

🤝 Contributing
Contributions are welcome! Here's how:

Fork the repo

Create your branch: git checkout -b feature/YourFeature

Commit your changes: git commit -m "Add feature"

Push to the branch: git push origin feature/YourFeature

Open a Pull Request

📄 License
This project is licensed under the MIT License

👤 Author
@akncodes
