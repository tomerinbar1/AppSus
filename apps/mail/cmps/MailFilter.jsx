export const MailFilter = ({ onHandleReadClick }) => {
  
  const handleChange = ev => {
    const { value } = ev.target
    onHandleReadClick(value)
  }

  return (
    <div className="mail-filter flex row">
      <select onChange={handleChange}>
        <option value="all">All</option>
        <option value="read">Read</option>
        <option value="unread">Unread</option>
      </select>
    </div>
  )
}
