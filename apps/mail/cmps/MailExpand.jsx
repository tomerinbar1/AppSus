const { useState, useEffect } = React
const { useParams } = ReactRouterDOM

import { MailService } from '../services/mailService.js'

export const MailExpand = ({ mails, mailId }) => {
  const [mail, setMail] = useState(null)
  const [isExpanded, setIsExpanded] = useState(false)


  useEffect(() => {
    loadMail(mailId)
  }, [mailId])

  const loadMail = mailId => {
    MailService.getEmail(mailId)
      .then(mail => {
        setMail(mail)
      })
      .catch(err => {
        console.log('MailExpand: err in loadMail', err)
      })
  }

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <li onClick={toggleExpand}>
      {mail && isExpanded && (
        <div>
          <p>{mail.body}</p>
          <p>
            Sent by: {mail.from.name} &lt;{mail.from.email}&gt;
          </p>
          <p>Sent at: {new Date(mail.sentAt).toLocaleString()}</p>
        </div>
      )}
    </li>
  )
}
