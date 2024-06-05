import React, {useState} from 'react'
// import { AppContext } from './context'
// import { useGlobalContext } from './context'
import Search from './Search'
import Movies from './Movies'
const Home = () => {
  const [title, setTitle] = useState('');
  const [poster, setPoster] = useState(null);
  const [type, setType] = useState('');
  const [date, setDate] = useState('');

  const handleChange = (event) => {
    const { name, value, files } = event.target;
    if (name === 'file') {
      setPoster(files[0]);
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
      const response = await fetch('http://192.168.0.104:4000/movies/add-movie', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Success:', data);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <>
    <Search />
    <Movies />  
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        id="title"
        placeholder="Movie Title"
        value={title}
        onChange={handleChange}
      />
      <input
        type="file"
        name="file"
        id="file"
        onChange={handleChange}
      />
      <input
        type="text"
        name="type"
        id="type"
        placeholder="Movie Type"
        value={type}
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
      <button type="submit" value="Add Movie">Submit</button>
    </form>
    </>
  )
}

export default Home
