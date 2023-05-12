const { Link } = ReactRouterDOM

import { NotePreview } from './NotePreview.jsx'

export function NoteList({ notes, onDeleNote }) {
  return (
    <div className="note-list-container">
      <ul className="pinned">
      {/* {notes.map((note) => {
          if (note && note.isPinned) {
            return <NotePreview onDeleNote={onDeleNote} note={note} key={note.id} />;
          }
          return null;
        })} */}
      </ul>
      <ul className="note-list">
        {notes.map(note => (
          <NotePreview onDeleNote={onDeleNote} note={note} key={note.id} />

        ))}
      </ul>
    </div>
  )
}

