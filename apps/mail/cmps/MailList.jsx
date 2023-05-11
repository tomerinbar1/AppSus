import { MailPreview } from './MailPreview.jsx'

export const MailList = ({ mails, onRemoveEmail }) => {
  return (
    <ul>
      {mails.map(mail => (
        <MailPreview mail={mail} onRemoveEmail={onRemoveEmail} key={mail.id} />
      ))}
    </ul>
  )
}
