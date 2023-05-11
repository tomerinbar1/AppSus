export const MailPreview = ({ mail, onRemoveEmail }) => {
  return (
    <li className="flex space-between" >
      <span>{mail.subject}</span>
      <span onClick={() => onRemoveEmail(mail.id)}>x</span>
    </li>
  )
}
