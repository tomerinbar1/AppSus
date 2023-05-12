const { Outlet, NavLink } = ReactRouterDOM

const inbox = '../../../assets/img/Gmail/inbox.png'
const starred = '../../../assets/img/Gmail/starred.png'
const sent = '../../../assets/img/Gmail/sent.png'
const drafts = '../../../assets/img/Gmail/draft.png'
const bin = '../../../assets/img/Gmail/bin.png'

export const MailMenu = ({ onToggleModal }) => {
  return (
    <section className="mail-menu flex column align">
      <button className="compose-btn" onClick={() => onToggleModal()}>
        Compose
      </button>
      <section className="menu-nav flex column">
        <NavLink to="/mail/inbox" style={{ backgroundImage: `url(${inbox})` }}>
          <img src={inbox} alt="Inbox" />
          <span>Inbox</span>
        </NavLink>
        <NavLink
          to="/mail/starred"
          style={{ backgroundImage: `url(${starred})` }}
        >
          <img src={starred} alt="Starred" />
          <span>Starred</span>
        </NavLink>
        <NavLink to="/mail/sent" style={{ backgroundImage: `url(${sent})` }}>
          <img src={sent} alt="Sent" />
          <span>Sent</span>
        </NavLink>
        <NavLink
          to="/mail/drafts"
          style={{ backgroundImage: `url(${drafts})` }}
        >
          <img src={drafts} alt="Drafts" />
          <span>Drafts</span>
        </NavLink>
        <NavLink to="/mail/trash" style={{ backgroundImage: `url(${bin})` }}>
          <img src={bin} alt="Bin" />
          <span>Bin</span>
        </NavLink>
      </section>
    </section>
  )
}
