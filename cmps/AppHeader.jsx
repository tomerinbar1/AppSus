const { Link, NavLink, useLocation } = ReactRouterDOM

import { SearchBar } from './SearchBar.jsx'
export function AppHeader() {
  const location = useLocation()
  const renderSearchBar =
    location.pathname === '/mail' || location.pathname === '/note'

  return (
    <header className="app-header">
      <Link to="/">
        <h3>LOGO!</h3>
      </Link>
      {renderSearchBar && <SearchBar />}
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/mail">Mail</NavLink>
        <NavLink to="/note">Note</NavLink>
      </nav>
    </header>
  )
}
