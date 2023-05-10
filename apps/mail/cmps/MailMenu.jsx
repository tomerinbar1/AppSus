
const { useEffect, useState } = React
import { MenuItem } from "./MenuItem.jsx"
import { getEmailMenu } from "../services/MailUtil.js"


export const MailMenu = ({onToggleModal}) => {
const menuItems = getEmailMenu()

    return (
        <section className="mail-menu flex column">
              <button onClick={() => onToggleModal()}>Compose</button>
            {menuItems.map(item => <MenuItem key={item.title} item={item} />)}
        </section>
    )
}