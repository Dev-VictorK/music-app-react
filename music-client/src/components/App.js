import '../index.css';
import React, { useEffect, useState } from 'react';
import TopBar from './TopBar';
import AlbumsContainer from './AlbumsContainer';
import Login from './Login';
import Logout from './Logout';
import { Route, Routes, Navigate } from 'react-router-dom';
import { client } from '../Client';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(client.isLoggedIn());

  // Check and login automatically on load
  useEffect(() => {
    const autoLogin = async () => {
      if (!client.isLoggedIn() || !(await client.isTokenValid())) {
        try {
          await client.login();
          setLoggedIn(true);
        } catch (error) {
          console.error("Auto-login failed", error);
        }
      }
    };

    autoLogin();
  }, []);

  // Keep syncing loggedIn state every 500ms (as you already had)
  useEffect(() => {
    const interval = setInterval(() => {
      setLoggedIn(client.isLoggedIn());
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='overflow-hidden h-screen'>
      <TopBar loggedIn={loggedIn} />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/logout' element={<Logout />} />
        <Route path="/" element={<Navigate to="/albums" replace />} />
        <Route path='/albums/*' element={<AlbumsContainer />} />
      </Routes>
    </div>
  );
}

export default App;
