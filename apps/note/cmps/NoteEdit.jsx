const { useEffect, useState, useRef } = React
const { useParams, useNavigate, NavLink } = ReactRouterDOM
import { noteService } from '../services/NoteService.js';



export function NoteEdit() {
  const [noteToEdit, setNoteToEdit] = useState({})
  const inputRef = useRef()
  const navigate = useNavigate()
  const params = useParams()



  useEffect(() => {
    if (params.id) {
      loadNote()

    }
  }, [])

  function loadNote() {
    noteService
      .getNote(params.id)
      .then(note => {
        setNoteToEdit(note)
      })
      .catch(err => {
        console.log('Had issued in note edit:', err)
        navigate('/note')
      })
  }

  function handleChange({ target }) {

    const field = target.name
    const value = target.type === 'number' ? +target.value || '' : target.value
    setNoteToEdit(prevNote => ({ ...prevNote, [field]: value }))
  }
  function handleChangeText({ target }) {
    const field = target.name;
    const value = target.type === 'number' ? +target.value || '' : target.value;

    setNoteToEdit((prevNote) => ({
      ...prevNote,
      info: {
        ...prevNote.info,
        txt: value,
      },
    }))
  }

  function onSaveNote(ev) {
    ev.preventDefault()
    noteService.saveNote(noteToEdit)
      .then(note => {
        const updatedNote = noteToEdit
        setNoteToEdit(updatedNote)
        navigate('/note')
      })

  }


  const { title, text } = noteToEdit

  return (
    <section className="note-edit">


      <form onSubmit={onSaveNote}>
        <label htmlFor="title">Title:</label>
        <input className="edit-input" onChange={handleChange} value={title} type="text" name="title" id="title" /><br />

        <label htmlFor="txt">Text:</label>
        <input className="edit-input" onChange={handleChangeText} value={text} type="text" name="txt" id="txt" /><br />

        <button type="submit">Save</button>
      </form>

    </section>
  )

}
