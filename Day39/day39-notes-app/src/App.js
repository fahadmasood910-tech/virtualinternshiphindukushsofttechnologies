import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [notes, setNotes] = useState(() => {
    try {
      const raw = localStorage.getItem("notesApp.notes");
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("notesApp.notes", JSON.stringify(notes));
  }, [notes]);

  function addNote(title, content) {
    const newNote = {
      id: Date.now(),
      title: title || "Untitled",
      content: content || "",
      createdAt: new Date().toISOString()
    };
    setNotes(prev => [newNote, ...prev]);
  }

  function deleteNote(id) {
    setNotes(prev => prev.filter(n => n.id !== id));
  }

  function updateNote(id, updates) {
    setNotes(prev => prev.map(n => n.id === id ? { ...n, ...updates } : n));
  }

  const filtered = notes.filter(n =>
    (n.title + " " + n.content).toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <Header />
      <main className="container">
        <NoteForm onAdd={addNote} />
        <div className="searchRow">
          <input
            className="searchInput"
            placeholder="Search notes..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <button className="clearBtn" onClick={() => setSearch("")}>Clear</button>
        </div>
        <NoteList notes={filtered} onDelete={deleteNote} onUpdate={updateNote} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
