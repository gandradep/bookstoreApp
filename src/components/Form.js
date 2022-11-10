/* eslint-disable */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addNewBook } from '../redux/books/books';

const FormBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();
  const books = useSelector((state) => state.book);


  const addBookHandler = () => {
    if (title !== '' && author !== '') {
      const newBook = {
        id: uuidv4(),
        title,
        author,
      };
      dispatch(addNewBook(newBook));      
      setTitle('');
      setAuthor('');
    }
  };
  return (
    <div>
      <form>
        <input
          type="text"
          name="title"
          value={title}
          placeholder="Book Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          name="author"
          value={author}
          placeholder="Book Author"
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button type="button" onClick={addBookHandler}>Add book</button>
      </form>
    </div>
  );
};
export default FormBook;
