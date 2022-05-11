import { configureStore } from '@reduxjs/toolkit'
import authorReducer from './authorReducer';
import bookReducer from './bookReducer';

const store = configureStore({
  reducer: {
    author: authorReducer,
    book: bookReducer,
  }
});

type RootState = ReturnType<typeof store.getState>;

export const selectAuthor = (state: RootState) => state.author.authors;
export const selectAuthorUpdateId = (state: RootState) => state.author.updateId;
export const selectAuthorFormVisible = (state: RootState) => state.author.isFormVisible;
export const selectBook = (state: RootState) => state.book.books;
export const selectBookUpdateId = (state: RootState) => state.book.updateId;
export const selectBookFormVisible = (state: RootState) => state.book.isFormVisible;

export default store;