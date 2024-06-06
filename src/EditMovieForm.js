import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import constants from './utils/constants';
import './EditMovie.css'
const EditMovieForm = () => {
    const { id } = useParams();
    const [imagePreview, setImagePreview] = useState(''); 
    const navigate = useNavigate();

    const [data, setData] = useState({})
    const [formData, setFormData] = useState({
        title: '',
        type: '',
        year: '',
    });

    const fetchMovie = () => {
        fetch(`${constants.url}movies/movie?search=${id}`, {
            method: 'GET'
        })
        .then(res => res.json())
        .then((result) => {
            console.log(result.data);
            setData(result.data[0])
            setFormData({
                title: result.data[0].title,
                type: result.data[0].type,
                year: result.data[0].year,
            });
        })
        .catch((err) => {
            console.log(err);
        });
    };


    const handlePosterChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                console.log(reader.result, "reader")
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            setImagePreview('');
        }
    };
    useEffect(() => {
        fetchMovie();
    }, [id]);
    console.log(data, "jfkask,")
    // // Check if movie is undefined or null and return null if true
    // if (!movie) {
    //     return null;
    // }

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setEditedMovie(prevState => ({
    //         ...prevState,
    //         [name]: value
    //     }));
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     onSave(editedMovie);
    // };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formDataToSend = new FormData();
        formDataToSend.append('title', formData.title);
        formDataToSend.append('type', formData.type);
        formDataToSend.append('year', formData.year);
        if (e.target.poster.files[0]) { // Check if a file is selected
            formDataToSend.append('poster', e.target.poster.files[0]); // Append the file object
        } else {
            formDataToSend.append('poster', data.poster); // Use the existing poster value if no file is selected
        }
        fetch(`${constants.url}movies/update-movie?id=${id}`, {
            method: 'POST',
            body: formDataToSend,
        })
        .then(res => res.json())
        .then((result) => {
            console.log(result);
            navigate('/add-movie');
        })
        .catch((err) => {
            console.log(err);
            // Handle error
        });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
  
    return (
        
        <div style={{width:'800px', margin:'auto',marginTop:'24px'}}>
            {id && 
        <form 
        onSubmit={handleSubmit}
        className='form-container'
        >   
        <div style={{display:'flex', flexDirection:'column', marginBottom:'18px'}}>
            <label>
                Title:
                </label>
                <input
                    type="text"
                    name="title"
                    style={{margin:'0', width:'100%'}}
                    
                    value={formData.title}
                    onChange={handleChange}
                />
     
            </div>
            <div style={{display:'flex', flexDirection:'column', marginBottom:'18px'}}>
            <label>
                Poster:
                </label>
                
                
                        
                        <input
                            type="file"
                            name="poster"
                            style={{ margin: '0', width: '100%' }}
                            onChange={handlePosterChange}
                        />
                        {imagePreview && (
                            <img src={imagePreview} alt="Poster Preview" style={{ width: '100px', height: '150px', marginBottom: '5px' }} />
                        )}
                        {!imagePreview && data.poster && (
                            <img src={constants.url + data.poster} alt="Poster" style={{ width: '100px', height: '150px', marginBottom: '5px' }} />
                        )}
            
            </div>
            <div style={{display:'flex', flexDirection:'column', marginBottom:'18px'}}>
            <label>
                Type:
                </label>
                <input
                    type="text"
                    name="type"
                    style={{margin:'0', width:'100%'}}
                    value={formData.type}
                    onChange={handleChange}
                />
         
            </div>
            <div style={{display:'flex', flexDirection:'column', marginBottom:'18px'}}>
            <label>
                Year:
                </label>
                <input
                    type="text"
                    name="year"
                    style={{margin:'0', width:'100%'}}  
                    value={formData.year}
                    onChange={handleChange}
                />
  
            </div >
           <div style={{marginTop:'24px', display:'flex', justifyContent:'space-between'}}> 
            <div>
                <button type="submit" style={{padding: '8px 24px',color: '#fff', backgroundColor: '#00b406',borderRadius: '18px',cursor: 'pointer',padding: '8px 24px',fontSize: '16px', border: 'none', marginRight:'8px'}}>Save</button>
                <button type="button" 
                style={{padding: '8px 24px',color: '#fff', backgroundColor: '#003d7f',borderRadius: '18px',cursor: 'pointer',padding: '8px 24px',fontSize: '16px', border: 'none'}}
                // onClick={onCancel}
            
                >
                    Cancel</button>
            </div>
            <div>
                <Link to={'/'} style={{padding: '8px 24px',color: '#fff', backgroundColor: '#b61d1d',borderRadius: '18px',cursor: 'pointer',padding: '8px 24px',fontSize: '16px', border: 'none', marginTop:'0'}}>Home</Link>
            </div>
           </div>
        </form>
        }
        </div>
    );
};

export default EditMovieForm;
