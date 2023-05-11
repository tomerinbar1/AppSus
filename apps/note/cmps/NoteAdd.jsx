const { useEffect, useState } = React
const {useNavigate}= ReactRouterDOM
import { noteService } from "../services/NoteService.js"


export function NoteAdd({notes,setNotes}){
const [noteToAdd,setNoteToAdd] = useState(noteService.createNote())
const navigate = useNavigate()

function handleChange({ target }) {
    const field = target.name
    const value = target.type === 'number' ? +target.value || '' : target.value
    setNoteToAdd(prevNote => ({ ...prevNote, [field]: value }))
  }


function onAddNote(ev) {
    ev.preventDefault()
    noteService.saveNote(noteToAdd)
    .then(note => {
        const updatedNotes = [...notes,note]
        setNotes(updatedNotes)
    })
   
    
  }
  
    
    return(
        <form onSubmit = {onAddNote}>
            <div className="input-container">
                <label htmlFor="title">Title</label>
                <input onChange={handleChange} type="text" name="title" value={noteToAdd.title} id="title" />
            </div>
            <button onClick = {onAddNote} >add note </button>

        </form>

    )
}

