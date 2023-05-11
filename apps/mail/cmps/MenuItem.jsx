export const MenuItem = ({ item }) => {
    return (
      <div className="menu-item flex align-center">
        <div className="menu-icon">
          <img src={item.icon} alt={item.title} />
        </div>
        <span>{item.title}</span>
      </div>
    )
  }
  