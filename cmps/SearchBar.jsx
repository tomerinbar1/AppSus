const { useNavigate, } = ReactRouterDOM
const { useState} = React

export function SearchBar() {
const navigate = useNavigate()

const handleChange = ev => {
  const { value } = ev.target
navigate({ search: `${value}`}) 
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
