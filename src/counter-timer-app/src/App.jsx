import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(15);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <h1>Counter Timer</h1>
      <h2>Counter will be stop at Zero </h2>
      <div>
        <h2>Count: {count}</h2>
      </div>
    </>
  );
}

export default App;
