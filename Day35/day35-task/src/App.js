import React from "react";
import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App" style={{
      minHeight: "100vh",
      backgroundColor: "#f4f4f4",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-between"
    }}>
      <Header />
      <ProfileCard />
      <Footer />
    </div>
  );
}

export default App;
