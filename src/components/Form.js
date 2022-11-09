import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from '../redux/books/books';

const FormBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();
  const books = useSelector((state) => state.book);
  const counterInitialState = Number(books[books.length - 1].id) + 1;
  const [counter, setCounter] = useState(counterInitialState.toString());

  const addBookHandler = () => {
    if (title !== '' && author !== '') {
      dispatch(addBook(title, author, counter));
      setCounter(counter + 1);
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
