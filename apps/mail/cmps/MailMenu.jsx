const inbox = '../../../assets/img/Gmail/inbox.png'
const starred = '../../../assets/img/Gmail/starred.png'
const sent = '../../../assets/img/Gmail/sent.png'
const drafts = '../../../assets/img/Gmail/draft.png'
const bin = '../../../assets/img/Gmail/bin.png'

export const MailMenu = ({ onToggleModal, mails, onHandleMenuClick }) => {
  return (
    <section className="mail-menu flex column align">
      <button className="compose-btn" onClick={() => onToggleModal()}>
        Compose
      </button>

      <section className="menu-nav flex column">
        <div
          onClick={() => onHandleMenuClick('inbox')}
          className="menu-inbox"
          to="/mail/inbox/"
        >
          <img src={inbox} alt="Inbox" />
          <span>Inbox</span>
          <span className="count">
            {mails.filter(mail => !mail.isRead).length}
          </span>
        </div>

        <div
          onClick={() => onHandleMenuClick('starred')}
          className="menu-starred"
          to="/mail/starred/"
        >
          <img src={starred} alt="Starred" />
          <span>Starred</span>
        </div>

        <div
          onClick={() => onHandleMenuClick('sent')}
          className="menu-sent"
          to="/mail/sent"
        >
          <img src={sent} alt="Sent" />
          <span>Sent</span>
        </div>

        <div
          onClick={() => onHandleMenuClick('drafts')}
          className="menu-drafts"
          to="/mail/drafts/"
        >
          <img src={drafts} alt="Drafts" />
          <span>Drafts</span>
        </div>

        <div
          onClick={() => onHandleMenuClick('bin')}
          className="menu-bin"
          to="/mail/bin/"
        >
          <img src={bin} alt="Bin" />
          <span>Bin</span>
          <span className="count">
            {mails.filter(mail => mail.removedAt).length}
          </span>
        </div>
      </section>
    </section>
  )
}
