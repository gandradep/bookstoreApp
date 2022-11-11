import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/books';

const Book = (props) => {
  const {
    author, title, id, percent, chapter,
  } = props;
  const dispatch = useDispatch();

  const removeBookHandler = (e) => {
    dispatch(deleteBook(e.target.id));
  };
  return (
    <div className="bookContainer dFlex">
      <div className="dFlex bookInfo">
        <div>
          <p className="roboto bold fs1375">{title}</p>
          <p className="blueFont fs875 roboto fw300">{author}</p>
        </div>
        <ul className="buttonList dFlex roboto fs875 fw300">
          <li><button className="blueFont" type="button">Comments</button></li>
          <li className="lightGray">|</li>
          <li>
            <button
              id={id}
              type="button"
              onClick={removeBookHandler}
              className="blueFont"
            >
              Remove
            </button>
          </li>
          <li className="lightGray">|</li>
          <li><button className="blueFont" type="button">Edit</button></li>
        </ul>
      </div>
      <div className="readPercent">
        <div>
          <span>
            {percent}
            %
          </span>
        </div>
      </div>
      <div className="currentChapter">
        <div>
          <span>{chapter}</span>
        </div>
      </div>
    </div>
  );
};
Book.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  percent: PropTypes.number.isRequired,
  chapter: PropTypes.string.isRequired,
};
export default Book;
