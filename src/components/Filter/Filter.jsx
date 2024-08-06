
export const Filter = ({filter, setFilter}) => {
    const handleFilterChange = e => {
        setFilter(e.target.value)
    }
  return (
    <>
        <div>
            <p>Find Contacts by Name</p>
            <input type="text" name="filter" placeholder="Search by Name" value={filter} onChange={handleFilterChange}/>
        </div>
    </>
  )
}
