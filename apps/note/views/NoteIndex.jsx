const { useEffect, useState } = React
const { Link } = ReactRouterDOM

import { NoteList } from '../cmps/NoteList.jsx'
import { NotePreview } from '../cmps/NotePreview.jsx'
import { noteService } from '../services/NoteService.js'
import { NoteAdd } from "../cmps/NoteAdd.jsx"
// var filterBy={}

export function NoteIndex() {
    const [notes, setNotes] = useState([])

    useEffect(() => {
        loadNotes()
    }, [])



    // function onAddNote(value) {
    //     noteService.save(value).then(noteService.getEmptyNote(value))
    // }

    function onDeleNote(noteId) {
        console.log('noteId', noteId)
        noteService
            .removeNote(noteId)
            .then(value => console.log('value print noteidx', value))
            .then(() => {
                const updatedNotes = notes.filter(note => note.id !== noteId)
                setNotes(updatedNotes)
            })
    }
    function loadNotes() {
        noteService.getNotes()
        .then(note => setNotes(note))
    }
    return (
        <section className="note-index">
            {/* <BookFilter onSetFilter={onSetFilter} filterBy={filterBy} /> */}
            {/* <CreateNote /> */}
            <button className="button button--green">
                <Link to="/note/edit">Edit Note</Link>
            </button>
            <button className="button button--green">
                <Link to="/note/add">Add Note</Link>
            </button>
            <NoteList onDeleNote={onDeleNote} notes={notes} />{' '}
            {/* Pass the notes prop here */}
            <div className="add-note">
                <NoteAdd notes={notes} setNotes={setNotes} />

            </div>
        </section>
    )
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
