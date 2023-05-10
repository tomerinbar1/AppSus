const { useEffect, useState } = React
const { Link } = ReactRouterDOM

import { NoteList } from "../cmps/NoteList.jsx";
import { NotePreview } from "../cmps/NotePreview.jsx";
import { noteService } from "../services/NoteService.js";

// var filterBy={}

export function NoteIndex() {
    const [notes, setNotes] = useState([]);
  
    useEffect(() => {
      loadNotes();
    }, []);
  

    function loadNotes() {
        noteService.query().then(note => setNotes(note));
      }



 
  
    return (
      <section className="note-index">
        {/* <BookFilter onSetFilter={onSetFilter} filterBy={filterBy} /> */}
        <button className="button button--green">
          <Link to="/note/edit">Edit Note</Link>
        </button>
        <button className="button button--green">
          <Link to="/note/add">Add Note</Link>
        </button>
        <NoteList notes={notes} /> {/* Pass the notes prop here */}
      </section>
    );
  }
  




























// export function NoteIndex(){


//     useEffect(() => {
//         loadNotes()
//       }, [])
    
//       function loadNotes() {
//         noteService.query(filterBy).then(notes => setBooks(notes))
//       }


//     const [notes, setNotes] = useState([])


//     return (
//         <section className="note-index">
//           {/* <BookFilter onSetFilter={onSetFilter} filterBy={filterBy} /> */}
//           <button className="button button--green">
//             <Link to="/note/edit">Edit Note</Link>
//           </button>
//           <button className="button button--green">
//             <Link to="/note/add">Add Note</Link>
//           </button>
//           <NoteList />
//         </section>
//       )
// }