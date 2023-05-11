const { useState } = React

export const MailExpand = ({ mail }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <li onClick={toggleExpand}>
      {isExpanded && (
        <div>
          <p>{mail.body}</p>
          <p>Sent by: {mail.from.name} &lt;{mail.from.email}&gt;</p>
          <p>Sent at: {new Date(mail.sentAt).toLocaleString()}</p>
        </div>
      )}
    </li>
  )
}
