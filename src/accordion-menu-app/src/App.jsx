import "./App.css";

const items = [
  {
    title: "Section 1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.",
  },
  {
    title: "Section 2",
    content:
      "Cras suscipit, quam vitae dapibus facilisis, justo erat tempor urna, at aliquet elit urna in nisi.",
  },
  {
    title: "Section 3",
    content:
      "Fusce nec felis id lacus sollicitudin venenatis. Proin ac massa sed turpis tempor luctus.",
  },
];

function App() {
  return <div>
    <div className="accordion-container">
      <h2>📂 Accordion Menu</h2>
      {items.map((item, index) => (
        <details key={index} className="accordion-item">
          <summary className="accordion-title">{item.title}</summary>
          <div className="accordion-content">{item.content}</div>
        </details>
      ))}
    </div>
  </div>;
}

export default App;
