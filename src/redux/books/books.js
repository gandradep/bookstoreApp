/* eslint-disable */
const BOOK_ADDED = 'bookstore/books/BOOK_ADDED';
const BOOK_REMOVED = 'bookstore/books/BOOK_REMOVED';

const initialState = [];

//reducer
const bookReducer = (state = initialState, action) => {
  switch (action.type){
    case BOOK_ADDED:
    return [
        ...state,
        {
          id: action.id,
          title: action.title,
          author: action.author,
        },
      ];
    case BOOK_REMOVED:
    return [
      ...state.filter((item)=>item.id!==action.id),
    ]
    default:
    return state;
  }
}

export const addBook = (title, author, id) => ({
  type: BOOK_ADDED,
  title,
  author,
  id,
});

export const removeBook = (id) => ({
  type: BOOK_REMOVED,
  id,
});

export default bookReducer;
