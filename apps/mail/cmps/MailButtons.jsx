export const MailButtons = ({ onRemoveEmail, onToggleRead, mail }) => {
  const removeEmail = (ev, mailId) => {
    ev.stopPropagation()
    onRemoveEmail(mailId)
  }

  const toggleRead = (ev, mail) => {
    ev.stopPropagation()
    onToggleRead(mail)
  }
  return (
    <div className="flex">
      <div onClick={ev => removeEmail(ev, mail.id)}>X</div>
      <div onClick={ev => toggleRead(ev, mail)}>R</div>
    </div>
  )
}
