
export const MenuItem = ({ item }) => {
    return (
        <div className="menu-item">
            <div className="menu-icon">{item.icon}</div>
            <span>{item.title}</span>
        </div>
    )
}