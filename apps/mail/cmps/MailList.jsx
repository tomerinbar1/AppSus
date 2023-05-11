import { MailPreview } from './MailPreview.jsx'
import { mailService } from '../services/mailService.js'

export function MailList({ mails }) {
  function onRemoveEmail(mailId) {
    mailService.removeEmail(mailId)
  }

  return (
    <ul>
      {mails.map(mail => (
        <MailPreview mail={mail} onRemoveEmail={onRemoveEmail} key={mail.id} />
      ))}
    </ul>
  )
}
