import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import UserCard from "./components/UserCard";

function App() {
  return (
    <>
      <Header />
      <div style={{ padding: "20px" }}>
        <UserCard name="Fahad Masood" age={20} profession="Computer Science Student" />
        <UserCard name="Waqas Ahmad" age={22} profession="Frontend Developer" />
      </div>
      <Footer />
    </>
  );
}

export default App;
