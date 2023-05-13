const { useEffect, useState } = React

import { mailService } from '../services/mailService.js'
const back = '../../../assets/img/Gmail/back-arrow.png'

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
    mailService.updateEmail(mail).then(updatedMail => {
      setSelectedMail(updatedMail)
    })
  }, [])

  if (!selectedMail) return <div>Loading...</div>
  return (
    <section className="mail-details">
      <Link className="back-img" to=".">
        <img src={back} alt="back" />
      </Link>
      <h1>{selectedMail.subject}</h1>
      <div className="email-header flex space-between">
        <span>{selectedMail.from}</span>
        <span>{getDisplayTime(selectedMail.sentAt)}</span>
      </div>
      <img src={selectedMail.img} alt="" />
    </section>
  )
}
