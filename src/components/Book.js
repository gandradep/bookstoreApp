import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const { author, title } = props;
  return (
    <div>
      <p>{author}</p>
      <p>{title}</p>
      <button type="button">Remove book</button>
    </div>
  );
};
Book.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
export default Book;
