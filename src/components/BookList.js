/* eslint-disable */
import React from 'react';
import Book from './Book';
import FormBook from './Form';
import { useSelector } from "react-redux";

const BookList = () => {
  const books = useSelector((state) => state.book);
  console.log(books);
  return (
    <div>
      {books?.map((book) => (
        <Book
          title={book.title}
          author={book.author}
          key={book.id}/>
      ))}
      <FormBook />
    </div>
    );

  }
  export default BookList;
