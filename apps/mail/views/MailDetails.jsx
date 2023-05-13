const { useEffect, useState } = React
import { MailService } from '../services/mailService.js'
const { Link } = ReactRouterDOM

export const MailDetails = ({ mail }) => {
  const [selectedMail, setSelectedMail] = useState(null)

  const getDisplayTime = date => {
    return new Intl.DateTimeFormat('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date)
  }

  useEffect(() => {
    mail.isRead = true
    MailService.updateEmail(mail).then(updatedMail => {
      setSelectedMail(updatedMail)
    })
  }, [])

  if (!selectedMail) return <div>Loading...</div>

  return (
    <section className="mail-details">
      <Link to=".">Back</Link>
      <h1>{selectedMail.subject}</h1>
      <div className="email-header flex space-between">
        <span>{selectedMail.from}</span>
        <span>{getDisplayTime(selectedMail.sentAt)}</span>
      </div>
      <div>{selectedMail.body}</div>
    </section>
  )
}
