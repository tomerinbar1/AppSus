
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
          <NoteTodo todos = {note.info.todos}/>
        </div>
      )}
      
      <button onClick={onHandleClick}>X</button>
    </li>
  )
}














































// export const NotePreview = ({ note, onDeleNote }) => {
  
//   function onHandleClick(ev) {
//     ev.stopPropagation()
//     onDeleNote(note.id)
//   }
//   return (
//     // <li className="note">
//     <li className="note" style={{ backgroundColor: `${note.style.backgroundColor}` }}>

//       <h1>{note.title}</h1> 
//       <p>{note.info.txt}</p>
//       {(() => {
//         if (note.info.url) {
          
//           return <div><p>{note.info.title}</p> <img className="note-img" src={`${note.info.url}`}/> 
//             </div>
//         }
//         return null;
//       })()}
//       {(() => {
//         if (note.info.todos) {
          
//           return <div><p>{note.info.todos.map(todo => todo.txt)}</p> 
//             </div>
//         }
//         return null;
//       })()}
//       <button onClick={onHandleClick}>X</button>
      
//     </li>
//   )
// }

// // <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
// // <label for="vehicle1"> I have a bike</label><br></br>