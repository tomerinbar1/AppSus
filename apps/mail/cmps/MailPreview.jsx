const { useNavigate } = ReactRouterDOM
const { useState } = React
import { utilService } from '../../../services/utilService.js'
import { MailButtons } from './MailButtons.jsx'

export const MailPreview = ({ mail, onRemoveEmail, onToggleRead }) => {
  const [isHover, setIsHover] = useState(false)
  const navigate = useNavigate()
  const notReadStyle = !mail.isRead
    ? { fontWeight: 600, backgroundColor: '#ffffff' }
    : {}

  const onOpenMailDetails = mailId => {
    navigate(`/mail/${mailId}`)
  }

  return (
    <li
      style={notReadStyle}
      className="flex space-between"
      onClick={() => onOpenMailDetails(mail.id)}
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <span>{mail.subject}</span>
      <div className="flex">
        {isHover ? (
          <MailButtons
            onRemoveEmail={onRemoveEmail}
            onToggleRead={onToggleRead}
            mail={mail}
          />
        ) : (
          <span>{utilService.formatDate(mail.sentAt)}</span>
        )}
      </div>
    </li>
  )
}
