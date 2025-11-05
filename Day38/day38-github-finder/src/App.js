import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);


  const fetchUser = async (username) => {
    if (!username) return;
    setLoading(true);
    setError("");
    setUser(null);

    try {
      const res = await fetch(`https://api.github.com/users/${username.trim()}`);
      if (res.status === 404) {
        throw new Error("User not found");
      }
      if (!res.ok) {
        throw new Error("Failed to fetch");
      }
      const data = await res.json();
      setUser(data);
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1> GitHub User Finder</h1>

      <SearchBar onSearch={fetchUser} />

      {loading && <p className="info">Loading...</p>}
      {error && <p className="error">{error}</p>}
      {user && <UserCard user={user} />}

    </div>
  );
}

export default App;
