import { MailPreview } from './MailPreview.jsx'
import { MailService } from '../services/mailService.js'


export const MailList = ({ mails }) => {
  
  const onRemoveEmail = mailId => {
    console.log('mailId', mailId);
    MailService
      .removeEmail(mailId)
      .then(() => {
        console.log('Mail removed successfully')
      })
      .catch(err => {
        console.error('Error removing mail', err)
      })
  }

  return (
    <ul>
      {mails.map(mail => (
        <MailPreview mail={mail} onRemoveEmail={onRemoveEmail} key={mail.id} />
      ))}
    </ul>
  )
}
