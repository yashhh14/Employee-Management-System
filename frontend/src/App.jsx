import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Add from './pages/Add';
import Update from './pages/Edit';
import Home from './pages/Home';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <>
      <NavBar />

      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/edit/:id" element={<Update />} />
      </Routes>
    </>
  );
};

export default App;