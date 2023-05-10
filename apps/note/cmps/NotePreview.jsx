export function NotePreview({ note }) {
    // let bookPrice = book.listPrice.amount
  
    let noteClass = ''
  
    if (book.isPinned) {
        noteClass = 'pinned'
    } else if (!book.isPinned) {
        noteClass = ''
    }
  
    return (
      <article className="notes-layout">
        <div className="notes-preview">
          <h2>{book.title}</h2>
          <img src={book.thumbnail} alt="" />
          <h4 className={`${noteClass}`}></h4>
        </div>
      </article>
    )
  }