import { useState } from "react";
import "./App.css";

export default function App() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const generatorQuote = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://api.api-ninjas.com/v2/randomquotes", {
        method: "GET",
        headers: {
          "X-Api-Key": import.meta.env.VITE_API_KEY,
        },
      });
      const data = await response.json();
      setQuote(data);
    } catch (error) {
      setError(error);
    }

    setLoading(false);
  };

  return (
    <div className="container">
      <div className="card">
        {loading && <p className="loading">Loading...</p>}
        {error && <p className="error">Error: {error.message}</p>}

        {quote && (
          <div className="quote-box">
            <p className="quote">"{quote[0].quote}"</p>
            <p className="author">- {quote[0].author}</p>
          </div>
        )}

        {!quote && !loading && (
          <p className="placeholder">Click the button to get a quote.</p>
        )}

        <div className="btn-wrap">
          <button onClick={generatorQuote} className="btn">Get Quote</button>
        </div>
      </div>
    </div>
  );
}

