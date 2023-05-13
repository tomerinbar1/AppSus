import { MailPreview } from './MailPreview.jsx'

export const MailList = ({ mails, onRemoveEmail,onToggleRead }) => {
  return (
    <ul>
      {mails.map(mail => (
        <MailPreview mail={mail} onToggleRead={onToggleRead} onRemoveEmail={onRemoveEmail} key={mail.id} />
      ))}
    </ul>
  )
}
