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
            <div className="add-note">
                <NoteAdd notes={notes} setNotes={setNotes} />

            </div>
            
            <NoteList onDeleNote={onDeleNote} notes={notes} />{' '}
            {/* Pass the notes prop here */}
            
        </section>
    )
}

