import React, { useState } from "react";
import "./App.css";

function App() {
 
  const [count, setCount] = useState(0);
  const [isDark, setIsDark] = useState(false);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);
  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div
      className="App"
      style={{
        backgroundColor: isDark ? "#1e1e1e" : "#f4f4f4",
        color: isDark ? "white" : "black",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        transition: "all 0.3s ease",
      }}
    >
      <h1> Counter App</h1>
      <h2>{count}</h2>

      <div style={{ margin: "10px" }}>
        <button onClick={decrement}>Decrease</button>
        <button onClick={reset} style={{ margin: " 10px" }}>
           Reset
        </button>
        <button onClick={increment}>Increase</button>
      </div>

      <button onClick={toggleTheme} style={{ marginTop: "20px" }}>
        {isDark ? " Light Mode" : " Dark Mode"}
      </button>
    </div>
  );
}

export default App;
