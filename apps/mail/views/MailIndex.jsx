const { useEffect, useState } = React
const { useLocation, Route, Routes, useParams } = ReactRouterDOM

import { MailService } from '../services/mailService.js'
import { MailList } from '../cmps/MailList.jsx'
import { MailCompose } from '../cmps/MailCompose.jsx'
import { MailMenu } from '../cmps/MailMenu.jsx'
import { MailFilter } from '../cmps/MailFilter.jsx'
import { MailDetails } from './MailDetails.jsx'

export const MailIndex = () => {
  const [mails, setMails] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isRead, setIsRead] = useState('all')
  const [selectedMail, setSelectedMail] = useState(null)
  const location = useLocation()
  const { mailId } = useParams()
  const { search } = location
  const txt = search.slice(1)

  useEffect(() => {
    loadMails()
  }, [txt, isRead])

  useEffect(() => {
    if (mailId) {
      MailService.getEmail(mailId).then(mail => {
        setSelectedMail(mail)
      })
    } else {
      setSelectedMail(null)
      loadMails()
    }
  }, [mailId])

  const loadMails = () => {
    const filterBy = { txt, isRead }
    MailService.getEmails(filterBy).then(mails => setMails(mails))
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

  const readFilter = value => {
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
        {selectedMail && <MailDetails mail={selectedMail} />}
        {!mailId && (
          <div>
            <MailFilter readFilter={readFilter} />
            <MailList
              mails={mails}
              onRemoveEmail={onRemoveEmail}
              onMailClick={onMailClick}
            />{' '}
          </div>
        )}
      </div>
    </section>
  )
}
