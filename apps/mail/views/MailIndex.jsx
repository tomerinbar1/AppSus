const { useEffect, useState } = React

import { MailService } from '../services/MailService.js'
import { MailList } from '../cmps/MailList.jsx'

export const MailIndex = () => {
  const [mails, setMails] = useState([])

  useEffect(() => {
    loadMails()
  }, [])

  const loadMails = () => {
    MailService.query().then(mail => {
      setMails(mail)
    })
  }

  return (
    <section className="mail-app flex">
      <div className="right-side">
        // MailFilter
        <MailList mails={mails} /> inside MailPreview
      </div>
      <div className="left-side flex column">// New Mail // MailMenu</div>
    </section>
  )
}
