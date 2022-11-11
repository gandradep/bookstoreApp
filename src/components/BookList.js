import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import FormBook from './Form';
import { getBooks } from '../redux/books/books';

const BookList = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.book);

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  return (
    <div className="content2 dFlex">
      <div className="bookList dFlex">
        {books?.map((book) => (
          <Book
            title={book.title}
            author={book.author}
            percent={book.percent}
            chapter={book.chapter}
            id={book.id}
            key={book.id}
          />
        ))}
      </div>
      <FormBook />
    </div>
  );
};
export default BookList;
