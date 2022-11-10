import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/books';

const Book = (props) => {
  const { author, title, id } = props;
  const dispatch = useDispatch();

  const removeBookHandler = (e) => {
    dispatch(deleteBook(e.target.id));
  };
  return (
    <div>
      <p>{title}</p>
      <p>{author}</p>
      <button
        id={id}
        type="button"
        onClick={removeBookHandler}
      >
        Remove book
      </button>
    </div>
  );
};
Book.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
export default Book;
