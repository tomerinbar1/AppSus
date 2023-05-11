import { MenuItem } from './MenuItem.jsx'
import { getEmailMenu } from '../services/mailUtil.js'

export const MailMenu = ({ onToggleModal }) => {
  const menuItems = getEmailMenu()

  return (
    <section className="mail-menu flex column">
      <button className="compose-btn" onClick={() => onToggleModal()}>
        Compose
      </button>
      {menuItems.map(item => (
        <MenuItem key={item.title} item={item}>
        </MenuItem>
      ))}
    </section>
  )
}
