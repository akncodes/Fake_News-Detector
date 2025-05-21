from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    news = data.get('news', '')
    # Dummy prediction logic here, replace with your model call
    prediction = "Fake" if "fake" in news.lower() else "Real"
    sentiment = "Neutral"
    return jsonify({'prediction': prediction, 'sentiment': sentiment})

if __name__ == '__main__':
    app.run(debug=True)
