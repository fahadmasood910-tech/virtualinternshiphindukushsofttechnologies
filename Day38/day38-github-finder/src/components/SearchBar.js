import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [username, setUsername] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!username.trim()) return;
    onSearch(username);
  };

  return (
    <form onSubmit={submit} className="searchForm">
      <input
        type="text"
        placeholder="Enter GitHub username..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="searchInput"
      />
      <button type="submit" className="searchButton">Search</button>
    </form>
  );
}

export default SearchBar;
