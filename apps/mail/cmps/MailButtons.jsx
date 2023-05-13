
const bin = '../../../assets/img/Gmail/bin.png'
const read = '../../../assets/img/Gmail/read.png'



export const 
MailButtons = ({ onRemoveEmail, onToggleRead, mail }) => {
  const removeEmail = (ev, mailId) => {
    ev.stopPropagation()
    onRemoveEmail(mailId)
  }

  const toggleRead = (ev, mail) => {
    ev.stopPropagation()
    onToggleRead(mail)
  }
  return (
    <div className="flex email-hover-icons align-center">
      <div onClick={ev => removeEmail(ev, mail.id)}><img src={bin} alt="Bin" /></div>
      <div onClick={ev => toggleRead(ev, mail)}><img src={read} alt="Read" /></div>
    </div>
  )
}