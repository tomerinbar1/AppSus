const { useEffect, useState } = React
const { useLocation } = ReactRouterDOM

import { MailService } from '../services/mailService.js'
import { MailList } from '../cmps/MailList.jsx'
import { MailCompose } from '../cmps/MailCompose.jsx'
import { MailMenu } from '../cmps/MailMenu.jsx'
import { MailFilter } from '../cmps/MailFilter.jsx'
// import { MailExpand } from '../cmps/MailExpand.jsx'

export const MailIndex = () => {
  const [mails, setMails] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedMail, setSelectedMail] = useState(null)
  const [isRead, setIsRead] = useState('all')
  const location = useLocation()
  const { search } = location
  const txt = search.slice(1)

  useEffect(() => {
    loadMails()
  }, [txt, isRead])

  const loadMails = () => {
    const filterBy = { txt, isRead}
    MailService.getEmails(filterBy).then(mails => setMails(mails))
    //
  }

  const onRemoveEmail = mailId => {
    MailService.removeEmail(mailId)
      .then(() => {
        console.log('Mail removed successfully')
        loadMails()
      })
      .catch(err => {
        console.error('Error removing mail', err)
      })
  }

  const onToggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  const onSendMail = mail => {
    MailService.saveEmail(mail).then(() => {
      onToggleModal()
      loadMails()
    })
  }

  const onMailClick = mailId => {
    setSelectedMail(mailId)
  }

  const readFilter = (value) => {
    setIsRead(value)
  }

  return (
    <section className="mail-app flex">
      <MailCompose
        isModalOpen={isModalOpen}
        onToggleModal={onToggleModal}
        onSendMail={onSendMail}
      />
      <div className="left-side flex column main-filter">
        <MailMenu onToggleModal={onToggleModal} />
      </div>
      <div className="right-side mail-list flex column">
        <MailFilter readFilter={readFilter} />
        <MailList
          mails={mails}
          onRemoveEmail={onRemoveEmail}
          onMailClick={onMailClick}
        />
        {/* <MailExpand mails={mails} mailId={selectedMail} /> */}
      </div>
    </section>
  )
}
