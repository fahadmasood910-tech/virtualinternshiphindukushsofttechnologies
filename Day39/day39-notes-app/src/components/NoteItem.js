import React, { useState } from "react";

export default function NoteItem({ note, onDelete, onUpdate }) {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);

  function save() {
    onUpdate(note.id, { title, content });
    setEditing(false);
  }

  return (
    <div className="note">
      {editing ? (
        <>
          <input className="input" value={title} onChange={e => setTitle(e.target.value)} />
          <textarea className="textarea" value={content} onChange={e => setContent(e.target.value)} />
          <div className="noteActions">
            <button className="btn" onClick={() => setEditing(false)}>Cancel</button>
            <button className="btn primary" onClick={save}>Save</button>
          </div>
        </>
      ) : (
        <>
          <h3 className="noteTitle">{note.title}</h3>
          <p className="noteContent">{note.content}</p>
          <div className="noteFooter">
            <small>{new Date(note.createdAt).toLocaleString()}</small>
            <div className="noteActions">
              <button className="btn" onClick={() => setEditing(true)}>Edit</button>
              <button className="btn danger" onClick={() => onDelete(note.id)}>Delete</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
