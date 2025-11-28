import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("#000000");
  const [copied, setCopied] = useState(false);

  const hexToRgb = (hex) => {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `${r}, ${g}, ${b}`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(color);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>🎨 Interactive Color Picker</h2>

      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        style={styles.colorInput}
      />

      <div style={{ ...styles.colorCard, backgroundColor: color }}>
        <p style={styles.previewText}>Preview</p>
      </div>

      <div style={styles.details}>
        <p><strong>HEX:</strong> {color}</p>
        <p><strong>RGB:</strong> {hexToRgb(color)}</p>
      </div>

      <button style={styles.copyBtn} onClick={handleCopy}>
        {copied ? "Copied!" : "Copy HEX"}
      </button>

      <div
        style={{
          ...styles.gradientBox,
          background: `linear-gradient(90deg, #ffffff, ${color})`,
        }}
      ></div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial",
    maxWidth: "500px",
    margin: "auto",
    textAlign: "center",
  },
  title: {
    marginBottom: "15px",
  },
  colorInput: {
    width: "200px",
    height: "50px",
    border: "none",
    cursor: "pointer",
  },
  colorCard: {
    width: "120px",
    height: "120px",
    borderRadius: "12px",
    border: "2px solid black",
    margin: "20px auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "background-color 0.3s ease",
  },
  previewText: {
    color: "white",
    fontWeight: "bold",
    textShadow: "0px 0px 5px black",
  },
  details: {
    marginBottom: "15px",
    lineHeight: "1.6",
  },
  copyBtn: {
    marginTop: "10px",
    padding: "10px 20px",
    borderRadius: "8px",
    cursor: "pointer",
    border: "none",
    background: "black",
    color: "white",
    fontWeight: "bold",
  },
  gradientBox: {
    width: "100%",
    height: "40px",
    marginTop: "20px",
    borderRadius: "8px",
  },
};

export default App;
