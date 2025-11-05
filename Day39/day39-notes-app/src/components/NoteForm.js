import React, { useState } from "react";

export default function NoteForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function submit(e) {
    e.preventDefault();
    if (!title.trim() && !content.trim()) return;
    onAdd(title.trim(), content.trim());
    setTitle("");
    setContent("");
  }

  return (
    <form className="noteForm" onSubmit={submit}>
      <input
        className="input"
        placeholder="Title (optional)"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <textarea
        className="textarea"
        placeholder="Write your note..."
        value={content}
        onChange={e => setContent(e.target.value)}
      />
      <div className="formRow">
        <button className="btn primary" type="submit">Add Note</button>
        <button
          type="button"
          className="btn"
          onClick={() => { setTitle(""); setContent(""); }}
        >
          Clear
        </button>
      </div>
    </form>
  );
}
