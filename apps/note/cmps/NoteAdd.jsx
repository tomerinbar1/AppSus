const { useEffect, useState } = React
const { useNavigate } = ReactRouterDOM
import { noteService } from '../services/NoteService.js'
import { NoteTodo } from './NoteTodo.jsx'
import { NoteImg } from '../cmps/NoteImg.jsx'

export function NoteAdd({ notes, setNotes }) {
  const [noteToAdd, setNoteToAdd] = useState(noteService.createNote())
  const [selectedOption, setSelectedOption] = useState('txt')
  const navigate = useNavigate()

  function handleChange({ target }) {
    const field = target.name
    const value = target.type === 'number' ? +target.value || '' : target.value
    setNoteToAdd(prevNote => ({ ...prevNote, [field]: value }))
  }
  function handleChangeText({ target }) {
    const field = target.name
    const value = target.type === 'number' ? +target.value || '' : target.value

    setNoteToAdd(prevNote => ({
      ...prevNote,
      info: {
        ...prevNote.info,
        txt: value,
      },
    }))
  }
  function handleChangeTodo(event) {
    const { name, type, value } = event.target

    if (type === 'number') {
      // Handle number input if needed
      // ...
    } else {
      const todos = value.split(',').map(todo => todo.trim())
      setNoteToAdd(prevNote => ({
        ...prevNote,
        info: {
          ...prevNote.info,
          txt: value,
          todos: todos,
        },
      }))
    }
  }

  function handleChangeImg({ target }) {
    const field = target.name
    const value = target.type === 'number' ? +target.value || '' : target.value

    setNoteToAdd(prevNote => ({
      ...prevNote,
      info: {
        ...prevNote.info,
        url: value,
      },
    }))
  }

  function onAddNote(ev) {
    ev.preventDefault()
    noteService.saveNote(noteToAdd).then(note => {
      const updatedNotes = [...notes, note]
      setNotes(updatedNotes)
    })
  }

  function DynamicCmp(props) {
    switch (props.target.value) {
      case 'txt':
        setSelectedOption('txt')
        break

      case 'img':
        setSelectedOption('img')
        return <NoteImg {...noteToAdd} />
      case 'todo':
        setSelectedOption('todo')
        return <NoteTodo {...noteToAdd} />

      case 'vid':
        setSelectedOption('vid')
        break
      default:
        setSelectedOption('txt')
    }
  }
  return (
    <form className="note-form" onSubmit={onAddNote}>
      <div className="input-container">
        {/* {selectedOption === 'img' && (<div>
                    <label htmlFor="title">Title</label>
                    <input onChange={handleChange} type="text" name="title" value={noteToAdd.title} id="title" /><br />
                    <label htmlFor="text">Text</label>
                    <input onChange={handleChangeText} type="text" name="txt" value={noteToAdd.info.txt} id="text" /><br />
                    <label htmlFor="Image">img</label>
                    <input onChange={handleChangeImg} type="file" name="img" value={noteToAdd.info.url} id="img" />
                </div>)} */}
        {selectedOption === 'txt' && (
          <div>
            <label htmlFor="title">Title</label>
            <input
              onChange={handleChange}
              type="text"
              name="title"
              value={noteToAdd.title}
              id="title"
            />
            <br />
            <label htmlFor="text">Text</label>
            <input
              onChange={handleChangeText}
              type="text"
              name="txt"
              value={noteToAdd.info.txt}
              id="text"
            />
          </div>
        )}
        {selectedOption === 'todo' && (
          <div>
            <label htmlFor="title">Title</label>
            <input
              onChange={handleChange}
              type="text"
              name="title"
              value={noteToAdd.title}
              id="title"
            />
            <br />
            <label htmlFor="text">Text</label>
            <input
              onChange={handleChangeTodo}
              type="text"
              name="txt"
              value={noteToAdd.info.todo}
              id="text"
            />
          </div>
        )}
      </div>
      <button className="note-form-button" onClick={onAddNote}>
        Add note{' '}
      </button>
      <select
        onChange={DynamicCmp}
        className="select-type"
        value={selectedOption}
        name="types"
        id="types"
      >
        <option value="text">Text</option>
        <option value="img">Image</option>
        <option value="todo">Todo</option>
        <option value="vid">Video</option>
      </select>
    </form>
  )
}
