const { useNavigate } = ReactRouterDOM

export const SearchBar = () => {
  const navigate = useNavigate()

  const handleChange = ev => {
    // ev is the event object
    const { value } = ev.target
    // extract the value from the event object
    navigate({ search: `${value}` })
    // navigate to the search value
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
