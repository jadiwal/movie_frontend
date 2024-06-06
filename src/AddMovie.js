import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import Modal from './Modal';
import constants from './utils/constants';
import MovieTable from './MovieTable';

const AddMovie = () => {
    const [title, setTitle]                   = useState('');
    const [poster, setPoster]                 = useState(null);
    const [type, setType]                     = useState('');
    const [date, setDate]                     = useState('');
    const [posterPreview, setPosterPreview]   = useState(null);
    const [showModal, setShowModal]           = useState(false);
    const [modalMessage, setModalMessage]     = useState('');
    // const [modal_update, setModal_update]     = useState(false)
    // const [item, setItem]                     = useState([])
    const [movieData, setMovieData]           = useState([])
  

    const getMovies = () =>{
      fetch(`${constants.url}movies/all-movies`,{
        method: 'GET'
      })
      .then(res => res.json())
      .then((result) =>{
        console.log(result)
        setMovieData(result.data)
      })
      .catch((err) =>{
        console.log(err)
      })
    }
    const resetForm = () => {
      setTitle('');
      setPoster(null);
      setType('');
      setDate('');
      setPosterPreview(null);
    };

    const handleChange = (event) => {
        const { name, value, files } = event.target;
        if (name === 'file' && files && files[0]) {
          const file = files[0];
          if (file && file.type.startsWith('image/')) { // Ensure it's an image file
            setPoster(file);
            setPosterPreview(URL.createObjectURL(file)); // Update image preview
          } else {
            alert('Please select a valid image file.');
          }
        } else {
          if (name === 'title') setTitle(value);
          if (name === 'type') setType(value);
          if (name === 'year') setDate(value);
        }
      };


  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      const formData = new FormData();
      formData.append('title', title);
      formData.append('movie_image', poster); // Make sure this matches the server-side key
      formData.append('type', type);
      formData.append('date', date);
  
      try {
        const response = await fetch(`${constants.url}movies/add-movie`, {
          method: 'POST',
          body: formData,
        });
  
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
  
        const data = await response.json();
        console.log('Success:', data);
        // Show success modal
        setModalMessage('Movie added successfully!');
        setShowModal(true);

      } catch (error) {
        console.error('Error:', error);
          // Show error modal
        setModalMessage('Error adding movie.');
        setShowModal(true);
      }
    };

    const closeModal = () => {
      setShowModal(false);
      setModalMessage('');
      resetForm();
    };

    // const modal_update_show = items_ => {
    //   //   alert(id);
    //   setModal_update(true)
    //   setItem(items_)
    // }

    // const modal_update_close = () => {
    //   setItem([])
    //   setModal_update(false)
    // }


    
  useEffect(() => {
    getMovies()
    console.log(movieData, "movie")
  }, [])

  return (
    <>
    <div className='addmovie-container'>
        <div className='movieHeader'>  
          <h4>Add New Movie</h4>
        </div>
        <form onSubmit={handleSubmit}>
            <div className='movie-item'>
                <input
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Movie Title"
                    value={title}
                    onChange={handleChange}
                />
          
            <input
                type="text"
                name="type"
                id="type"
                placeholder="Type"
                value={type}
                onChange={handleChange}
            />
        </div>
        

        <div className='movie-item'> 
            
            <input
                type="file"
                name="file"
                id="file"
                onChange={handleChange}
            />
             <input
                type="date"
                name="year"
                id="year"
                placeholder="Release Year"
                value={date}
                onChange={handleChange}
            />
        </div>
        <div>
        {posterPreview && (
            <div className='movie-item'>
              <img src={posterPreview} alt="Poster Preview" style={{ width: '200px', height: '300px' }} />
            </div>
          )}
        </div>
        <div className='submitBtn'> 
            <button type="submit" value="Add Movie">Submit</button>
        </div>
        <div className='movieBtn'>  
          <Link to={'/'}>Back To Home</Link>
        </div>
        </form>
       
    </div>

          {/* <MovieTable  data={movieData} /> */}


    <Modal show={showModal} onClose={closeModal} message={modalMessage} />



          {/* Table Start */}
          
          <MovieTable />
    
    </>
  )
}

export default AddMovie
