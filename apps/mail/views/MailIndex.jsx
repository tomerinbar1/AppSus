const { useEffect, useState } = React

import { MailService } from '../services/mailService.js'
import { MailList } from '../cmps/MailList.jsx'
import { MailCompose } from '../cmps/MailCompose.jsx'
import { MailMenu } from '../cmps/MailMenu.jsx'
import { MailExpand } from '../cmps/MailExpand.jsx'

export const MailIndex = () => {
  const [mails, setMails] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    loadMails()
  }, [])

  const loadMails = () => {
    MailService.getEmails().then(mails => {
      setMails(mails)
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
        <MailList mails={mails} onRemoveEmail={onRemoveEmail} />
      </div>
        <MailExpand className="mail-expand" mails={mails} />
    </section>
  )
}
