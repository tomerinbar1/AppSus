const inbox = '../../../assets/img/Gmail/inbox.png'
const starred = '../../../assets/img/Gmail/starred.png'
const sent = '../../../assets/img/Gmail/sent.png'
const drafts = '../../../assets/img/Gmail/draft.png'
const bin = '../../../assets/img/Gmail/bin.png'

export const MailMenu = ({ onToggleModal, mails, onMenuClick }) => {
  return (
    <section className="mail-menu flex column align">
      <button className="compose-btn" onClick={() => onToggleModal()}>
        Compose
      </button>

      <section className="menu-nav flex column">
        <div
          onClick={() => onMenuClick('inbox')}
          className="menu-inbox"
          to="/mail/inbox/"
          style={{ backgroundImage: `url(${inbox})` }}
        >
          <img src={inbox} alt="Inbox" />
          <span>Inbox</span>
          <span className="count">
            {mails.filter(mail => !mail.isRead).length}
          </span>
        </div>

        <div
          onClick={() => onMenuClick('starred')}
          className="menu-starred"
          to="/mail/starred/"
          style={{ backgroundImage: `url(${starred})` }}
        >
          <img src={starred} alt="Starred" />
          <span>Starred</span>
        </div>

        <div
          onClick={() => onMenuClick('sent')}
          className="menu-sent"
          to="/mail/sent"
          style={{ backgroundImage: `url(${sent})` }}
        >
          <img src={sent} alt="Sent" />
          <span>Sent</span>
        </div>

        <div
          onClick={() => onMenuClick('drafts')}
          className="menu-drafts"
          to="/mail/drafts/"
          style={{ backgroundImage: `url(${drafts})` }}
        >
          <img src={drafts} alt="Drafts" />
          <span>Drafts</span>
        </div>

        <div
          onClick={() => onMenuClick('bin')}
          className="menu-bin"
          to="/mail/bin/"
          style={{ backgroundImage: `url(${bin})` }}
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
