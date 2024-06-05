
import './App.css';

import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import SingleMovie from './SingleMovie'
import Error from './Error';
import AddMovie from './AddMovie';


function App() {
  return (
   <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:id" element={<SingleMovie />} />
      <Route path="*" element={<Error />} />
      <Route path='/add-movie' element={<AddMovie />}/>
    </Routes>
   </>
  );
}

export default App;
