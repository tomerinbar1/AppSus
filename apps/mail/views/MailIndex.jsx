const { useEffect, useState } = React
const { useLocation, useParams } = ReactRouterDOM

import { mailService } from '../services/mailService.js'
import { MailList } from '../cmps/MailList.jsx'
import { MailCompose } from '../cmps/MailCompose.jsx'
import { MailMenu } from '../cmps/MailMenu.jsx'
import { MailFilter } from '../cmps/MailFilter.jsx'
import { MailDetails } from './MailDetails.jsx'

export const MailIndex = () => {
  const [mails, setMails] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedMail, setSelectedMail] = useState(null)
  const [filterBy, setFilterBy] = useState({ isStar: null, isRead: null, txt: '' })

  const location = useLocation()
  const params = useParams()
  const { mailId } = params
  const { search } = location
  const txt = search.slice(1)

  useEffect(() => {
    onHandleSearch(txt)
    loadMails()
  }, [txt])

  useEffect(() => {
    loadMails()
  }, [filterBy])

  useEffect(() => {
    if (mailId) {
      mailService.getEmail(mailId).then(mail => {
        setSelectedMail(mail)
      })
    } else {
      setSelectedMail(null)
      loadMails()
    }
  }, [mailId])

  const loadMails = () => {
    mailService.getEmails(filterBy).then(mails => setMails(mails))
  }

  const onRemoveEmail = mailId => {
    mailService
      .removeEmail(mailId)
      .then(() => {
        loadMails()
      })
      .catch(err => {
        console.log('Error removing mail:', err)
      })
  }

  const onToggleRead = mail => {
    mail.isRead = !mail.isRead
    mailService
      .updateEmail(mail)
      .then(() => {
        loadMails()
      })
      .catch(err => {
        console.log('Error updating mail:', err)
      })
  }

  const onToggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  const onSendMail = mail => {
    mailService.saveEmail(mail).then(() => {
      onToggleModal()
      loadMails()
    })
  }

  const onMailClick = mailId => {
    setSelectedMail(mailId)
  }

  const onHandleMenuClick = status => {
    setFilterBy(prevFilterBy => ({ ...prevFilterBy, status }))
  }

  const onHandleReadClick = isRead => {
    setFilterBy(prevFilterBy => ({ ...prevFilterBy, isRead }))
  }

  const onHandleSearch = txt => {
    setFilterBy(prevFilterBy => ({
      ...prevFilterBy,
      txt: txt,
    }))
  }

  return (
    <section className="mail-app flex">
      <MailCompose
        isModalOpen={isModalOpen}
        onToggleModal={onToggleModal}
        onSendMail={onSendMail}
      />
      <div className="left-side flex column main-filter">
        <MailMenu
          onToggleModal={onToggleModal}
          onHandleMenuClick={onHandleMenuClick}
          mails={mails}
        />
      </div>
      <div className="right-side mail-list flex column">
        {selectedMail && <MailDetails mail={selectedMail} />}
        {!mailId && (
          <div>
            <MailFilter onHandleReadClick={onHandleReadClick} />
            <MailList
              mails={mails}
              onRemoveEmail={onRemoveEmail}
              onToggleRead={onToggleRead}
              onMailClick={onMailClick}
            />{' '}
          </div>
        )}
      </div>
    </section>
  )
}
