import React, { useState } from "react";

export default function App() {
  // State for tasks/products list
  const [items, setItems] = useState([]);
  // State for input fields
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  // Add a new item
  const addItem = () => {
    if (title.trim() === "") return alert("Title cannot be empty");
    const newItem = {
      id: Date.now(),
      title,
      desc,
      completed: false,
    };
    setItems([newItem, ...items]);
    setTitle("");
    setDesc("");
  };

  // Toggle completed status
  const toggleComplete = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  // Delete an item
  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div style={{ maxWidth: 600, margin: "auto", padding: 20, fontFamily: "Arial" }}>
      <h1>Task / Product Manager</h1>

      <div style={{ marginBottom: 20 }}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ width: "100%", padding: 8, marginBottom: 8, fontSize: 16 }}
        />
        <textarea
          placeholder="Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          rows={3}
          style={{ width: "100%", padding: 8, fontSize: 16 }}
        />
        <button
          onClick={addItem}
          style={{
            marginTop: 10,
            padding: "10px 15px",
            fontSize: 16,
            cursor: "pointer",
          }}
        >
          Add Task/Product
        </button>
      </div>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {items.length === 0 && <li>No tasks/products yet</li>}
        {items.map(({ id, title, desc, completed }) => (
          <li
            key={id}
            style={{
              border: "1px solid #ddd",
              padding: 10,
              marginBottom: 10,
              backgroundColor: completed ? "#d4edda" : "#fff",
              textDecoration: completed ? "line-through" : "none",
              borderRadius: 5,
            }}
          >
            <h3>{title}</h3>
            <p>{desc}</p>
            <div>
              <button
                onClick={() => toggleComplete(id)}
                style={{ marginRight: 10, cursor: "pointer" }}
              >
                {completed ? "Mark Incomplete" : "Mark Complete"}
              </button>
              <button
                onClick={() => deleteItem(id)}
                style={{ cursor: "pointer", color: "red" }}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}