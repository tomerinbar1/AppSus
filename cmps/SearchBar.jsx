const { useNavigate } = ReactRouterDOM

export const SearchBar = () => {
  const navigate = useNavigate()

  const handleChange = ev => {
    const { value } = ev.target
    navigate({ search: `${value}` })
    if (value === '') navigate('/mail')
  }

  return (
    <div className="search-bar">
      <input
        type="text"
        name="searchStr"
        onChange={handleChange}
        placeholder="Search"
      />
    </div>
  )
}
