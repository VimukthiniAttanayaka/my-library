import { configureStore } from '@reduxjs/toolkit'
import authorReducer from './authorReducer';

const store = configureStore({
  reducer: {
    author: authorReducer,
  }
});

type RootState = ReturnType<typeof store.getState>;

export const selectAuthor = (state: RootState) => state.author.authors;
export const selectAuthorUpdateId = (state: RootState) => state.author.updateId;
export const selectFormVisible = (state: RootState) => state.author.isFormVisible;
export default store;