const { Link } = ReactRouterDOM

import { NotePreview } from './NotePreview.jsx'

export function NoteList({ notes, onRemoveNote }) {
    
    return (
        <ul>
            {notes.map(note => (
                <NotePreview note={note} key={note.id} />
            ))}
        </ul>
    )
}



/* <button className="button button--blue">
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

         */