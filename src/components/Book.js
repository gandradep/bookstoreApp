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
    <div className="bookContainer dFlex alignCenter">
      <div className="dFlex bookInfo flexCol">
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
      <div className="readPercent dFlex alignCenter">
        <div className="percWheel" />
        <div className="dFlex flexCol">
          <span className="fs2 montse">
            {percent}
            %
          </span>
          <span className="fs1 montse opacity50">Completed</span>
        </div>
      </div>
      <div className="currentChapter dFlex flexCol">
        <div>
          <h5 className="roboto fw300 fs1 opacity50">CURRENT CHAPTER</h5>
          <span className="roboto fs1 fw300">{chapter}</span>
        </div>
        <button className="roboto fs1 fw300 upProgButt" type="button">UPDATE PROGRESS</button>
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
