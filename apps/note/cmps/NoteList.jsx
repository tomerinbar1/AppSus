


const { Link } = ReactRouterDOM

import { NotePreview } from './NotePreview.jsx'

export function  NoteList({ notes, onRemoveNote }) {
  return (
    <ul className="note-list ">
      {notes.map(note => (
        <li key={note.id}>
          <NotePreview note={note} />

          <button className="button button--blue">
            <Link to={`/note/${note.id}`}>Select Note</Link>
          </button>

          <button
            className="button button--red"
            onClick={() => onRemoveNote(note.id)}
          >
            Remove Note
          </button>
          <button className="button button--yellow">
            <Link to={`/note/edit/${note.id}`}>Edit</Link>
          </button>
        </li>
      ))}
    </ul>
  )
}