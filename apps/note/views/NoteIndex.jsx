const { useEffect, useState } = React
const { Link, useParams, useNavigate } = ReactRouterDOM

import { NoteList } from '../cmps/NoteList.jsx'
import { NotePreview } from '../cmps/NotePreview.jsx'
import { noteService } from '../services/NoteService.js'
import { NoteAdd } from '../cmps/NoteAdd.jsx'
// var filterBy={}

export function NoteIndex() {
  const [notes, setNotes] = useState([])
  const navigate = useNavigate()
  const params = useParams()

  useEffect(() => {
    loadNotes()
  }, [])

  function onEditNote(note) {
    noteService.saveNote(note).then(loadNotes)
  }

  function onDeleNote(noteId) {
    noteService
      .removeNote(noteId)
      .then(value => console.log('value print noteidx', value))
      .then(() => {
        const updatedNotes = notes.filter(note => note.id !== noteId)
        setNotes(updatedNotes)
      })
  }

  function loadNotes() {
    noteService.getNotes().then(note => setNotes(note))
  }
  return (
    <section className="note-index">
      {/* <BookFilter onSetFilter={onSetFilter} filterBy={filterBy} /> */}
      {/* <CreateNote /> */}
      <div className="add-note">
        <NoteAdd notes={notes} setNotes={setNotes} />
      </div>
      <NoteList onDeleNote={onDeleNote} onEditNote={onEditNote} notes={notes} />{' '}
      {/* Pass the notes prop here */}
    </section>
  )
}
