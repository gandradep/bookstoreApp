import { createAsyncThunk } from '@reduxjs/toolkit';

const BOOK_ADDED = 'bookstore/books/BOOK_ADDED';
const BOOK_REMOVED = 'bookstore/books/BOOK_REMOVED';
const BOOK_FETCHED = 'bookstore/books/BOOK_FETCHED';
const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/HYvefzS5gcHT0i7sKve7/books';

const fetchBook = (data) => ({
  type: BOOK_FETCHED,
  data,
});

const addBook = (title, author, id) => ({
  type: BOOK_ADDED,
  title,
  author,
  id,
});

const removeBook = (id) => ({
  type: BOOK_REMOVED,
  id,
});

export const getBooks = createAsyncThunk(
  'books/getBooks',
  async (_, thunkApi) => fetch(baseUrl)
    .then((response) => response.json())
    .then((data) => {
      thunkApi.dispatch(fetchBook(Object.entries(data)));
    }),
);

export const addNewBook = createAsyncThunk(
  'books/addNewBook',
  async (obj1, thunkApi) => {
    const { id, title, author } = obj1;
    return fetch(baseUrl, {
      method: 'POST',
      body: JSON.stringify({
        item_id: id,
        title,
        author,
        category: 'MANGA',
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((res) => {
        if (res.ok) {
          thunkApi.dispatch(addBook(title, author, id));
        }
      });
  },
);
export const deleteBook = createAsyncThunk(
  'books/deleteBook',
  async (id, thunkApi) => fetch(`${baseUrl}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((res) => {
      if (res.ok) {
        thunkApi.dispatch(removeBook(id));
      }
    }),
);

const bookReducer = (state = [], action) => {
  const bookList = [];
  switch (action.type) {
    case BOOK_FETCHED:
      action.data.forEach((item) => {
        const newbook = {
          id: item[0],
          title: item[1][0].title,
          author: item[1][0].author,
        };
        bookList.push(newbook);
      });
      return [
        ...bookList,
      ];
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
        ...state.filter((item) => item.id !== action.id),
      ];
    default:
      return state;
  }
};

export default bookReducer;
