import React from 'react';

class FormBook extends React.PureComponent {
  render() {
    return (
      <div>
        <form>
          <input type="text" name="title" placeholder="Book Title" />
          <input type="text" name="author" placeholder="Book Author" />
          <button type="button">Add book</button>
        </form>
      </div>
    );
  }
}
export default FormBook;
