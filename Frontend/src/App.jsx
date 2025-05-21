import React, { useState } from "react";
import axios from "axios";

function App() {
  const [news, setNews] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!news.trim()) return alert("Please enter news text.");
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:5000/predict", { news });
      setResult(res.data.prediction);
    } catch (err) {
      alert("Error connecting to backend.");
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-xl rounded-xl p-8 max-w-xl w-full">
        <h1 className="text-2xl font-bold mb-6 text-center text-blue-600">
          🧠 Fake News Detector
        </h1>
        <form onSubmit={handleSubmit}>
          <textarea
            className="w-full border border-gray-300 rounded-lg p-4 text-gray-800"
            rows={8}
            placeholder="Paste news article here..."
            value={news}
            onChange={(e) => setNews(e.target.value)}
          ></textarea>
          <button
            type="submit"
            className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            {loading ? "Analyzing..." : "Detect"}
          </button>
        </form>
        {result && (
          <p className="mt-4 text-center text-lg">
            Prediction:{" "}
            <span
              className={
                result.trim().toUpperCase() === "FAKE"
                  ? "text-red-500 font-bold"
                  : "text-green-500 font-bold"
              }
            >
              {result}
            </span>
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
