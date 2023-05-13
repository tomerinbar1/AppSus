const { NavLink, useLocation } = ReactRouterDOM

import { SearchBar } from './SearchBar.jsx'

export function AppHeader() {
  const location = useLocation()
  const renderGmailLogo = location.pathname === '/mail'
  const renderKeepLogo = location.pathname === '/note'

  return (
    <header className="app-header">
      {renderGmailLogo && <img src="assets/img/Gmail/gmail-logo.png" alt="" />}
      {renderKeepLogo && (
        <div className="keep-logo-container">
          <img src="assets/img/Keep/keep-logo.png" alt="" />
          <span className="keep-logo-text">Keep</span>
        </div>
      )}
      <SearchBar />
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/mail">Mail</NavLink>
        <NavLink to="/note">Note</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
    </header>
  )
}
