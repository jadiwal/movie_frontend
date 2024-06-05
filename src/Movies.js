import React, {useState} from 'react'
import { useGlobalContext } from './context'
import { NavLink } from 'react-router-dom'
import constants from './utils/constants';
import MovieModal from './MovieModal';

const Movies = () => {
  const {movie, isLoading} = useGlobalContext();
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleCardClick = (item) => {
    setSelectedMovie(item);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedMovie(null);
  };

  if(isLoading){
    return(
      <div className=''>
        <div className='loading'>Loading.....</div>
      </div>
    )
  }
  console.log(movie, "sdfnsd")
  return (
    <>
    <section className='movie-page'>
    <div className='container grid grid-4-col'>
      {movie && movie.map((item) => (
          
        <div key={item.id} onClick={() => handleCardClick(item)}>
          <NavLink to={`movie/${item.id}`}>
            <div className='card'>
              <div className='card-info'>
                <h2>{item.title}</h2>
                <img src={constants.url+item.poster} alt={item.title} />
              </div>
            </div>
          </NavLink>
        </div>
      ))}
    </div>
  </section>
    <MovieModal show={showModal} onClose={closeModal} movie={selectedMovie} />
    </>
  )
}

export default Movies
