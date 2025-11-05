import React from "react";
import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";
import Footer from "./components/Footer";
import fahadPic from "./images/fahad.jpg";

function App() {
  return (
    <div style={{ textAlign: "center" }}>

      <Header />

    
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "70vh", 
          flexDirection: "column",
        }}
      >
        <ProfileCard
          name="Fahad Masood"
          role="Computer Science Student"
          location="Chitral, Pakistan"
          image={fahadPic}
        />
      </div>

      <Footer />
    </div>
  );
}

export default App;
