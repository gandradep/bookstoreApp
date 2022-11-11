import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addNewBook } from '../redux/books/books';

const FormBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

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
    <div className="formComponent">
      <h2 className="montse bold fs1375 gray">ADD NEW BOOK</h2>
      <form className="dFlex formContainer">
        <input
          type="text"
          name="title"
          value={title}
          placeholder="Book Title"
          onChange={(e) => setTitle(e.target.value)}
          className="input"
        />
        <input
          type="text"
          name="author"
          value={author}
          placeholder="Book Author"
          onChange={(e) => setAuthor(e.target.value)}
          className="input author"
        />
        <button
          type="button"
          onClick={addBookHandler}
          className="roboto bold fs1 formButt"
        >
          ADD BOOK
        </button>
      </form>
    </div>
  );
};
export default FormBook;
