// Routing_App.jsx
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './Home'; 
import Login from './Login'; 
import Chat from './Chat'; // Ensure this import is correct
import { useState } from 'react';
import ProtectedRoute from './ProtectedRoute'

function Routing_App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <>
      <h1>Routing App</h1>
      <Routes>
        <Route path="/" element={<ProtectedRoute isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}>
          <Route index element={<Home setIsLoggedIn={setIsLoggedIn} />} />
        </Route>
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/chat/:uniqueId" element={
          <ProtectedRoute isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}>
            <Chat />
          </ProtectedRoute>
        } />
      </Routes>
    </>
  );
}


export default Routing_App;
