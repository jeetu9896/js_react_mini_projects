import { useEffect, useState } from "react";
import "./App.css";

const items = [
  "Apple",
  "Banana",
  "Orange",
  "Mango",
  "Pineapple",
  "Grapes",
  "Strawberry",
  "Blueberry",
  "Watermelon",
  "Peach",
];

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [listItem, setListItem] = useState(items);

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    setListItem(filteredItems);
  }, [searchTerm]);

  return (
    <div className="container">
      <h1 className="title">Fruit Search</h1>

      <div className="input-box">
        <input
          type="text"
          placeholder="Search fruits..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="list-box">
        {listItem.length > 0 ? (
          listItem.map((item, index) => (
            <div key={index} className="card-item">
              {item}
            </div>
          ))
        ) : (
          <p className="no-result">No fruits found</p>
        )}
      </div>
    </div>
  );
}

export default App;
