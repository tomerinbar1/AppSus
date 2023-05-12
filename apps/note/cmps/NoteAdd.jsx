const { useEffect, useState } = React
const { useNavigate } = ReactRouterDOM
import { noteService } from "../services/NoteService.js"
import { NoteTodo } from "./NoteTodo.jsx";
import { NoteImg } from "../cmps/NoteImg.jsx";


export function NoteAdd({ notes, setNotes }) {
    const [noteToAdd, setNoteToAdd] = useState(noteService.createNote())
    const [selectedOption, setSelectedOption] = useState('');
    const navigate = useNavigate()

    function handleChange({ target }) {
        console.log(target)
        const field = target.name
        const value = target.type === 'number' ? +target.value || '' : target.value
        setNoteToAdd(prevNote => ({ ...prevNote, [field]: value }))
    }
    function handleChangeText({ target }) {
        const field = target.name;
        const value = target.type === 'number' ? +target.value || '' : target.value;

        setNoteToAdd((prevNote) => ({
            ...prevNote,
            info: {
                ...prevNote.info,
                txt: value,
            },
        }))
    }

    function handleSelectedOption(ev) {
        setSelectedOption(ev.target.value);
        console.log('selected option:', ev.target.value)
    }

    function onAddNote(ev) {
        ev.preventDefault()
        noteService.saveNote(noteToAdd)
            .then(note => {
                const updatedNotes = [...notes, note]
                setNotes(updatedNotes)
            })

    }

    function DynamicCmp(props) {
        console.log('dynamicCmp', props.target.value)
        switch (props.target.value) {
            case 'txt':
                setSelectedOption('txt')
                break;
                return <ColorInput {...props} />
            case 'img':
                setSelectedOption('img')
                return <NoteImg {...noteToAdd} />
            case 'todo':
                setSelectedOption('todo')
                return <NoteTodo {...props} />

            case 'vid':
                setSelectedOption('vid')
                break;
                return <FontsizeInput {...props} />
        }
    }
    return (
        <form className="note-form" onSubmit={onAddNote}>
            <div className="input-container">
                <label htmlFor="title">Title</label>
                <input onChange={handleChange} type="text" name="title" value={noteToAdd.title} id="title" /><br />
                <label htmlFor="text">Text</label>
                <input onChange={handleChangeText} type="text" name="txt" value={noteToAdd.info.txt} id="text" />
            </div>
            <button onClick={onAddNote} >Add note </button>
            <select onChange={DynamicCmp} className="select-type" value={selectedOption} name="types" id="types">
                <option value="text">Text</option>
                <option value="img">Image</option>
                <option value="todo">Todo</option>
                <option value="vid">Video</option>
            </select>
        </form>

    )
}

