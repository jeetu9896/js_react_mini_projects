import { useState } from "react";
import "./App.css";

const getStrengthColor = (strength) => {
  switch (strength) {
    case "weak":
      return "red";
    case "medium":
      return "orange";
    case "strong":
      return "green";
    default:
      return "#ccc";
  }
};

function App() {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    checkStrength(value);
  };

  const checkStrength = (pwd) => {
    if (!pwd) {
      setStrength("");
      return;
    }

    if (pwd.length < 8) {
      setStrength("weak");
      return;
    }

    const upper = /[A-Z]/.test(pwd);
    const lower = /[a-z]/.test(pwd);
    const number = /[0-9]/.test(pwd);
    const special = /[!@#$%^&*()]/.test(pwd);

    const validCount = [upper, lower, number, special].filter(Boolean).length;

    if (validCount <= 2) setStrength("weak");
    else if (validCount === 3) setStrength("medium");
    else setStrength("strong");
  };

  return (
    <div className="card">
      <h2>Password Strength Checker</h2>

      <input
        style={{ height: "32px", width: "250px", padding: "8px" }}
        type="text"
        placeholder="Enter Your Password"
        value={password}
        onChange={handleChange}
      />

      {strength && (
        <div
          style={{
            marginTop: "10px",
            height: "6px",
            width: "250px",
            background: getStrengthColor(strength),
            borderRadius: "8px",
            transition: "0.3s",
          }}
        ></div>
      )}

      {strength && (
        <p
          style={{
            marginTop: "8px",
            fontWeight: "bold",
            color: getStrengthColor(strength),
            textTransform: "capitalize",
          }}
        >
          {strength} password
        </p>
      )}
    </div>
  );
}

export default App;
