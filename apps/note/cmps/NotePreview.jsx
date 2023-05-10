






export const  NotePreview = ({ note, onDeleNote }) =>  {
    function onHandleClick(ev){
        ev.stopPropagation()
        onDeleNote(note.id)
    }
    return <li>{note.id}
    <button onClick ={onHandleClick}>X</button>
        </li>
}
























// export function NotePreview({ note }) {
//     // let bookPrice = book.listPrice.amount
  
//     let noteClass = ''
  
//     if (note.isPinned) {
//         noteClass = 'pinned'
//     } else if (!book.isPinned) {
//         noteClass = ''
//     }
  
//     return (
//       <article className="notes-layout">
//         <div className="notes-preview">
//           <h2>{note.title}</h2>
//           <img src={note.thumbnail} alt="" />
//           <h4 className={`${noteClass}`}></h4>
//         </div>
//       </article>
//     )
//   }