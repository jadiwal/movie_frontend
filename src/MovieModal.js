import React from 'react';

const MovieModal = ({ show, onClose, movie }) => {
  if (!show || !movie) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>{movie.title}</h2>
        <img src={movie.poster} alt={movie.title} style={{ width: '200px', height: '300px' }} />
        <p>Type: {movie.type}</p>
        <p>Release Date: {movie.date}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default MovieModal;
