import React from 'react';
import PropTypes from 'prop-types';

class Book extends React.PureComponent {
  render() {
    const { author, title } = this.props;
    return (
      <div>
        <p>{author}</p>
        <p>{title}</p>
        <button type="button">Remove book</button>
      </div>
    );
  }
}
Book.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
export default Book;
