export const MailPreview = ({ mail, onDeleteMail }) => {
  return (
    <li onClick={() => onDeleteMail(mail.id)}>
      <span>{mail.subject}</span>
    </li>
  )
}
