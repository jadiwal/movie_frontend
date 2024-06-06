import React,{useEffect, useState} from 'react'
import { useGlobalContext } from './context'
import constants from './utils/constants';
import ConfirmationModal from './ConfirmationModal'; 
import EditMovieForm from './EditMovieForm';
import { Link } from 'react-router-dom';

import './MovieTable.css'
const MovieTable = () => {
    const {movie} = useGlobalContext()
    // const [showModal, setShowModal]           = useState(false);
    // const [modalMessage, setModalMessage]     = useState('');
    const [showModal, setShowModal] = useState(false);
    const [selectedMovieId, setSelectedMovieId] = useState(null);
    const [editedMovie, setEditedMovie] = useState(null);


    console.log(movie, "table")
    const handleEdit = (id) => {
        console.log(`Edit movie with id: ${id}`);
        // Find the movie with the given ID
        const selectedMovie = movie.find(movie => movie.id === id);
        // Set the selected movie for editing
        setEditedMovie(selectedMovie);
    };
    // const confirmEdit = () => {
    //     // Perform edit action here
    //     setShowModal(false); // Hide the edit modal after editing
    //     console.log(`Edit movie with id: ${editedMovie.id}`);
    //     console.log('Edited movie:', editedMovie);
    // };

    const handleDelete = (id) => {
        setSelectedMovieId(id); // Store the ID of the movie to be deleted
        setShowModal(true); // Show the confirmation modal
    };
    const confirmDelete = () => {
        fetch(`${constants.url}movies/delete-movie?id=${selectedMovieId}`, {
            method: 'POST'
        })
        .then(res => res.json())
        .then((result) => {
            console.log(result.data);
        })
        .catch((err) => {
            console.log(err);
        });

        setShowModal(false); // Hide the confirmation modal after deleting
        console.log(`Delete movie with id: ${selectedMovieId}`);
    };

    // const handleDelete = (id) => {

    //     fetch(`${constants.url}movies/delete-movie?id=${id}`,{
    //         method:'POST'
    //     })
    //     .then(res =>res.json())
    //     .then((result) =>{
    //         console.log(result.data)
    //     })
    //     .catch((err) =>{
    //         console.log(err)
    //     })

    //     console.log(`Delete movie with id: ${id}`);
    // };
    useEffect(()=>{

    },[movie])
    return (
        <>
        <div className='movie-table-container'>
            <h1 style={{textAlign:'center'}}>Movie List</h1>
            <table className='movie-table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Poster</th>
                        <th>Type</th>
                        <th>Year</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {movie && movie.map(movie => (
                        <tr key={movie.id}>
                        <td>{movie.id}</td>
                        <td>{movie.title}</td>
                        <td><img src={constants.url+movie.poster} alt={movie.title} width="100" /></td>
                        <td>{movie.type}</td>
                        <td>{movie.year}</td>
                        <td>
                            <div style={{display:'flex'}}>
                            {/* <button onClick={() => handleEdit(movie.id)}>Edit</button> */}
                            <Link to={{pathname: `/edit-movie/${movie.id}`, state: { movieData: movie }}} 
                                className="edit-link movie-table-link"
                                style={{display:'block'}}
                            >
                                Edit
                            </Link>
                            <button onClick={() => handleDelete(movie.id)}>Delete</button>
                            </div>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
        {/* Render the ConfirmationModal component */}
        <ConfirmationModal 
                show={showModal} 
                onClose={() => setShowModal(false)} 
                onConfirm={confirmDelete} 
                message="Are you sure you want to delete this movie?"
            />
            {/* Render the EditMovieForm component */}
            {/* {editedMovie && (
                <EditMovieForm 
                    movie={editedMovie} 
                    onSave={() => setEditedMovie(null)} // Clear the edited movie state after save
                    onCancel={() => setEditedMovie(null)} // Clear the edited movie state on cancel
                />
            )} */}
        </>
        
    );
};


export default MovieTable

