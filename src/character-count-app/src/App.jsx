import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState("");
  const [wordCount, setWordCount] = useState(0);

  const handleButton = () => {
    setCount("");
    setWordCount(0);
  };

  useEffect(() => {
    if (count.length > 0) {
      let wc = count.trim().split(" ").length;
      setWordCount(wc);
      return;
    }
    setWordCount(0);
  }, [count]);

  return (
    <div className="container">
      <textarea
        value={count}
        onChange={(e) => setCount(e.target.value)}
        placeholder="Start typing here..."
      />
      <div className="stats">
        <span>Characters: {count.length}</span>
        <span>Words: {wordCount}</span>
      </div>
      <div className="btn">
        <button onClick={handleButton}>Reset</button>
      </div>
    </div>
  );
}

export default App;
