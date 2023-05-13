// const { useEffect, useState } = React
const { useNavigate, Link } = ReactRouterDOM
const { Outlet, NavLink } = ReactRouterDOM
import { NoteImg } from "./NoteImg.jsx";
import { NoteTodo } from "./NoteTodo.jsx";

export const NotePreview = ({ note, onDeleNote }) => {
  function onHandleClick(ev) {
    ev.stopPropagation();
    onDeleNote(note.id);

  }

  return (
    <li className="note" style={{ backgroundColor: note.style.backgroundColor }}>
      <h1>{note.title}</h1>
      <p>{note.info.txt}</p>

      {note.info.url && (

        <div>
          <NoteImg note={note} />
        </div>
      )}

      {note.info.todos && (
        <div className="checkbox-input">
          <NoteTodo todos={note.info.todos} />
        </div>
      )}

      <button onClick={onHandleClick}>X</button>
      <button><NavLink to={`/note/edit/${note.id}`} >Edit</NavLink></button>
      {/* <button><Link to={`/note/edit/${note.id}`} >Edit</Link></button> */}
    </li>
  )
}




