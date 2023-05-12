export const NoteImg = ({ note }) => {

    return <div>
        <p>{note.info.title}</p>
        <img className="note-img" src={`${note.info.url}`} alt="Note Image" />
    </div>
}