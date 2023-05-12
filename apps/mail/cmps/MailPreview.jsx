export const MailPreview = ({ mail, onRemoveEmail }) => {
  const notReadStyle = !mail.isRead
    ? { fontWeight: 600, backgroundColor: '#ffffff' }
    : {}

  return (
    <li style={notReadStyle} className="flex space-between">
      <span>{mail.subject}</span>
      <span onClick={() => onRemoveEmail(mail.id)}>x</span>
    </li>
  )
}
