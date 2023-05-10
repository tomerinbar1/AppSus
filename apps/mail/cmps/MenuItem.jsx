
export const MenuItem = ({ item }) => {
    return (
        <div className="menu-item">
            <i className="material-icons">{item.icon}</i>
            <span>{item.title}</span>
        </div>
    )
}