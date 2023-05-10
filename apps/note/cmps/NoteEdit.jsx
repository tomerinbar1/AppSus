const { useEffect, useState } = React
const { useParams, useNavigate } = ReactRouterDOM

import { noteService } from '../services/NoteService.js'

export function NoteEdit() {
  const [noteToEdit, setNoteToEdit] = useState(noteService.getEmptyNote())
  const navigate = useNavigate()
  const params = useParams()

  useEffect(() => {
    if (params.noteId) loadNote()
  }, [])

  function loadNote() {
    noteService
      .get(params.noteId)
      .then(setNoteToEdit)
      .catch(err => {
        console.log("Couldn't edit the note", err)
        navigate('/note')
      })
  }

  function handleChange({ target }) {
    const field = target.name
    const value = target.type === 'number' ? +target.value || '' : target.value
    setBookToEdit(prevNote => ({ ...prevNote, [field]: value }))
  }

  function onSaveNote(ev) {
    ev.preventDefault()
    noteService.save(noteToEdit).then(() => {
      navigate('/note')
    })
  }

  const { type, txt } = noteToEdit

  return (
    <section className="note-filter">
      <h2>{noteToEdit.id ? 'Edit' : 'Add'} Note</h2>
      <form onSubmit={onSaveNote}>
        <label htmlFor="txt">Note text:</label>
        <input
          value={txt}
          onChange={handleChange}
          name="txt"
          id="txt"
          type="text"
          placeholder="Enter note"
        />

        <button className="button button--blue">
          {noteToEdit.id ? 'Save' : 'Add'}
        </button>
      </form>
    </section>
  )
}
