import '../index.css';
import React from 'react';
import TopBar from './TopBar';
import AlbumsContainer from './AlbumsContainer';
import Login from './Login';
import Logout from './Logout';
import { Route, Routes, Navigate } from 'react-router-dom';

const App = () => {
  return (
    <div className='overflow-hidden h-screen'>
      <TopBar />
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/logout' element={<Logout/>}/>
        <Route path="/" element={<Navigate to="/albums" replace />} />
        <Route path='/albums/*' element={<AlbumsContainer />} />
      </Routes>
    </div>
  );
}

export default App;