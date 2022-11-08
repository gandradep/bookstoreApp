/* eslint-disable */
import { combineReducers, createStore } from 'redux';
import bookReducer from './books/books';

const reducer = combineReducers({
  book: bookReducer
});

const store = createStore(reducer);

export default store;
