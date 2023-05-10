const { useEffect, useState } = React

import { MailService } from '../services/MailService.js'

export const MailCompose = ({isModalOpen,onSendMail,onToggleModal}) => {
  const [mail, setMail] = useState(MailService.createEmail())

const sendMail = (ev) => {
    ev.preventDefault()
    onSendMail(mail)
}

  if(!isModalOpen) return null
  return (
    <section className="mail-compose">
       
        <div className="mail-compose-modal">
        <div className='flex space-between'>
            <span>New Message</span>
            <span onClick={()=>onToggleModal() }>X</span>
        </div>
          <form onSubmit={sendMail}>
            <div className='mail-compose-recipients'>
              <input
                multiple
                type="text"
                placeholder="Recipients"
                value={mail.to}
                onChange={ev => setMail({ ...mail, to: ev.target.value })}
              />
            </div>
            <div className='mail-compose-subject'>
              <input
                type="text"
                placeholder="Subject"
                value={mail.subject}
                onChange={ev => setMail({ ...mail, subject: ev.target.value })}
              />
            </div>
            <div className='mail-compose-body'>
              <textarea
                placeholder="Message"
                value={mail.body}
                onChange={ev => setMail({ ...mail, body: ev.target.value })}
              ></textarea>
            </div>
            <div className='actions'>
                <button type='submit'>Sent</button>
            </div>
          </form>
        </div>
    </section>
  )
}