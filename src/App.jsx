import React, { useState } from "react";
import NestedCheckbox from "./NestedCheckbox";
import "./index.css";

export default function App() {
  const [selectedCount, setSelectedCount] = useState(0);

  const treeData = {
    id: "root",
    label: "Select All",
    children: [
      {
        id: "fruits",
        label: "Fruits",
        children: [
          { id: "apple", label: "Apple" },
          { id: "banana", label: "Banana" },
          { id: "orange", label: "Orange" }
        ]
      },
      {
        id: "vegetables",
        label: "Vegetables",
        children: [
          { id: "carrot", label: "Carrot" },
          { id: "broccoli", label: "Broccoli" },
          { id: "potato", label: "Potato" }
        ]
      }
    ]
  };

  return (
    <div className="app">
      <h1>Nested Checkbox Demo</h1>
      <p>Selected checkboxes: {selectedCount}</p>

      <div className="card">
        <NestedCheckbox tree={treeData} setSelectedCount={setSelectedCount} />
      </div>
    </div>
  );
}
