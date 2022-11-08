import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import FormBook from './Form';

const BookList = () => {
  const books = useSelector((state) => state.book);
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
