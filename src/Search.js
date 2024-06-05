import React from 'react'
import { useGlobalContext } from './context'
import { Link } from 'react-router-dom'

const Search = () => {
  const {query, setQuery, isError} = useGlobalContext()
  return (
    <>
    <section className='search-section'>
      <h2>Search Your Favourite Movie</h2>
      <form action='#' onSubmit={(e) => e.preventDefault()}>
        <div style={{display:"flex", alignItems:'center', justifyContent:'center'}}>
        <div>
          <input type='text' placeholder='Search here'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div className='movieBtn'>  
          <Link to='add-movie'>ADD MOVIE</Link>
        </div>
        </div>
      </form>
      <div className='card-error'>
        <p>{isError.show && isError.msg}</p>
      </div>

      
    </section>
    </>
  )
}

export default Search
