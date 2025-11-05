import React from "react";
import NoteItem from "./NoteItem";

export default function NoteList({ notes, onDelete, onUpdate }) {
  if (!notes.length) return <p className="empty">No notes yet. Add your first note!</p>;

  return (
    <div className="notesGrid">
      {notes.map(note => (
        <NoteItem key={note.id} note={note} onDelete={onDelete} onUpdate={onUpdate} />
      ))}
    </div>
  );
}
