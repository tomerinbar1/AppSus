const { useState } = React

export const SearchBar = () => {

  const [searchStr, setSearchStr] = useState('')

  const handleChange = ({ target }) => {
    const value = target.value
    setSearchStr(value)
  }

  return (
    <div className="search-bar">
      <input
        type="text"
        name="searchStr"
        value={searchStr}
        onChange={handleChange}
        placeholder="Search"
      />
    </div>
  )
}
