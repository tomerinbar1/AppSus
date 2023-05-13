const { useNavigate } = ReactRouterDOM

export const MailPreview = ({ mail, onRemoveEmail }) => {
  const navigate = useNavigate()
  const notReadStyle = !mail.isRead
    ? { fontWeight: 600, backgroundColor: '#ffffff' }
    : {}

    const onOpenMailDetails = (mailId) => {
      navigate(`/mail/${mailId}`)
    }

  return (
    <li style={notReadStyle} className="flex space-between" onClick={()=> onOpenMailDetails(mail.id)}>
      <span>{mail.subject}</span>
      <span onClick={() => onRemoveEmail(mail.id)}>x</span>
    </li>
  )
}
