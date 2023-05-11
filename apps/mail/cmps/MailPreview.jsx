import { MailExpand } from './MailExpand.jsx'

export const MailPreview = ({ mail }) => {
  return (
    <li>
      {mail.subject} <MailExpand mail={mail} />
    </li>
  )
}
