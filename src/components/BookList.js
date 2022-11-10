/* eslint-disable */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import FormBook from './Form';
import { getBooks } from '../redux/books/books';


const BookList = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.book);

  useEffect(() => {
    dispatch(getBooks())
  }, []);
  console.log(books);
  return (
    <div>
      {books?.map((book) => (
        <Book
          title={book.title}
          author={book.author}
          id={book.id}
          key={book.id}
        />
      ))}
      <FormBook />
    </div>
  );
};
export default BookList;
