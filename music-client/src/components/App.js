import '../index.css';
import React from 'react';
import TopBar from './TopBar';
import AlbumsContainer from './AlbumsContainer';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div className='overflow-hidden h-screen'>
      <TopBar />
      <Routes>
        <Route path='/albums/*' element={<AlbumsContainer />} />
      </Routes>
    </div>
  );
}

export default App;