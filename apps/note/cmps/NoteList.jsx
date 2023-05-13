const { Link } = ReactRouterDOM

import { NotePreview } from './NotePreview.jsx'

export function NoteList({ notes, onDeleNote }) {
  return (
    <div className="note-list-container">
      <ul className="pinned"></ul>
      <ul className="note-list">
        {notes.map(note => (
          <NotePreview onDeleNote={onDeleNote} note={note} key={note.id} />
        ))}
      </ul>
    </div>
  )
}
