import React from 'react';
import Book from './Book';
import FormBook from './Form';

class BookList extends React.PureComponent {
  render() {
    return (
      <div>
        <Book title="title1" author="author1" />
        <Book title="title2" author="author2" />
        <FormBook />
      </div>
    );
  }
}
export default BookList;
