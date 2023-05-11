const { useEffect, useState } = React

import { noteService } from "../services/NoteService"


export function NoteAdd(){
const [note,setNote] = useState(noteService.createNote())

function onAddNote() {
    const newNote = noteService.createNote()
    .then(
        noteService.saveNote(newNote)
        )
   
    
  }
  
    
    return(
        <button onClick = {onAddNote}>add note </button>
    )
}

