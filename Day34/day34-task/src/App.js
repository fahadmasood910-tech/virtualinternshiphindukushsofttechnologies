import React, { useState } from "react";
import "./App.css";

function App() {

  const [text, setText] = useState("");
  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div
      className="App"
      style={{
        textAlign: "center",
        padding: "50px",
        fontFamily: "Poppins, sans-serif",
        backgroundColor: "#f0f8ff",
        minHeight: "100vh",
        transition: "all 0.3s ease",
      }}
    >
      <h1> Live Preview App</h1>
      <p>Type something below  and see it appear in real  time</p>

  
      <input
        type="text"
        placeholder="Type here"
        value={text}
        onChange={handleChange}
        style={{
          padding: "10px",
          width: "300px",
          borderRadius: "6px",
          border: "2px solid #007bff",
          fontSize: "16px",
          outline: "none",
        }}
      />

      <div
        style={{
          marginTop: "30px",
          fontSize: "20px",
          color: "#333",
        }}
      >
        <strong>Live Preview:</strong> {text ? text : "Your text "}
      </div>
    </div>
  );
}

export default App;
