import "./styles.css";
import { useState } from "react";

const arr = ["Pen", "Book", "Pencil"];

export default function App() {
  const [arrCpy, setArrCpy] = useState(arr.map((item, i) => ({ id: i, item })));
  const [checkedItems, setCheckedItems] = useState([]);

  const handleCheckBoxChange = (itemId) => {
    const isChecked = checkedItems.includes(itemId);

    if (isChecked) {
      setCheckedItems(checkedItems.filter((id) => id !== itemId));
    } else {
      setCheckedItems([...checkedItems, itemId]);
    }
  };

  const handleDeleteButtonClick = (itemId) => {
    const updatedArrCpy = arrCpy.filter((item) => item.id !== itemId);
    setArrCpy(updatedArrCpy);
    setCheckedItems(checkedItems.filter((id) => id !== itemId));
  };

  return (
    <div className="App">
      {arrCpy.map((item) => (
        <div key={item.id}>
          <input
            type="checkbox"
            checked={checkedItems.includes(item.id)}
            onChange={() => handleCheckBoxChange(item.id)}
          />
          {item.item}
          {checkedItems.includes(item.id) && (
            <button onClick={() => handleDeleteButtonClick(item.id)}>
              Delete
            </button>
          )}
        </div>
      ))}
      {arrCpy.length === 0 && <h1>No Item is list</h1>}
    </div>
  );
}
