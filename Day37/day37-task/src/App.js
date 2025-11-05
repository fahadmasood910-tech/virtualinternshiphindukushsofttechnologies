import React, { useState } from "react";
import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";
import Footer from "./components/Footer";
import fahadPic from "./images/fahad.jpg";

function App() {
  const [isDark, setIsDark] = useState(false); 
  const [views, setViews] = useState(0); 

  const toggleTheme = () => setIsDark(!isDark);
  const increaseViews = () => setViews(views + 1);
  const resetViews = () => setViews(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const appStyle = {
    textAlign: "center",
    backgroundColor: isDark ? "#121212" : "#f4f4f4",
    color: isDark ? "#f8f9fa" : "#000",
    minHeight: "100vh",
    transition: "all 0.4s ease",
  };

  return (
    <div style={appStyle}>
      <Header />

      <button
        onClick={toggleTheme}
        style={{
          margin: "20px",
          padding: "10px 20px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: isDark ? "#ffc107" : "#007bff",
          color: isDark ? "black" : "white",
          cursor: "pointer",
        }}
      >
        {isDark ? "Light Mode" : "Dark Mode"}
      </button>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          minHeight: "60vh",
        }}
      >
       <ProfileCard
        name="Fahad Masood"
       role="Computer Science Student"
       location="Chitral, Pakistan"
       image={fahadPic}
       darkMode={isDark} 
        />


        <h3 style={{ marginTop: "15px", color: isDark ? "#f8f9fa" : "#000" }}>
          Profile Views: {views}
        </h3>

        <div style={{ marginTop: "10px" }}>
          <button
            onClick={increaseViews}
            style={{
              backgroundColor: "#28a745",
              color: "white",
              border: "none",
              padding: "8px 14px",
              borderRadius: "6px",
              cursor: "pointer",
              marginRight: "10px",
            }}
          >
            + Add View
          </button>

          <button
            onClick={resetViews}
            style={{
              backgroundColor: "#dc3545",
              color: "white",
              border: "none",
              padding: "8px 14px",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
             Reset
          </button>
        </div>
      </div>
    

   <Footer isDarkMode={isDarkMode} />

    </div>
  );
}

export default App;
