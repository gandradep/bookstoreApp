/* eslint-disable */
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import BookList from './components/BookList';
import Categories from './components/Categories';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<BookList />} />
            <Route path="/categories" element={<Categories />} />
          </Routes>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
