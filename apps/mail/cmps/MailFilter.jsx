export const MailFilter = ({ readFilter }) => {
  
  const handleChange = ev => {
    const { value } = ev.target
    readFilter(value)
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
