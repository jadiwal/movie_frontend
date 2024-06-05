import React from 'react'
import { useGlobalContext } from './context'
import { NavLink } from 'react-router-dom'

const Movies = () => {
  const {movie} = useGlobalContext()
  console.log(movie, "sdfnsd")
  return (
    <section className='movie-page'>
    <div className='container grid grid-4-col'>
      {movie && movie.map((item) => (
          
        <div key={item.id}>
          <NavLink to={`movie/${item.id}`}>
            <div className='card'>
              <div className='card-info'>
                <h2>{item.title}</h2>
                <img src={`http://192.168.0.104:4000/${item.poster}`} alt={item.title} />
              </div>
            </div>
          </NavLink>
        </div>
      ))}
    </div>
  </section>
  )
}

export default Movies
