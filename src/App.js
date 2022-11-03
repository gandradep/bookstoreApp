/* eslint-disable */
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />

      </div>
    </BrowserRouter>
  );
}

export default App;
