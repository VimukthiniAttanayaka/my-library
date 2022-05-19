import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IBook, BookArray } from '../components/types/LibraryTypes';

interface booksSliceState {
    books: BookArray[];
    updateId: number;
}
const initialState: booksSliceState = {
    books: [],
    updateId: -1,
}

export const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        addBooks: (state, action: PayloadAction<IBook>) => {
            state.books = [
                ...state.books,
                {
                    id: state.books.length,
                    book: action.payload,
                }
            ]
        },
        removeBooks: (state, action: PayloadAction<number>) => {
            state.books = state.books.filter(({ id }) => id !== action.payload);
        },
        updateBookId: (state, action: PayloadAction<number>) => {
            state.updateId = action.payload;
        },
        updateBook: (state, action: PayloadAction<IBook>) => {
            const allBooks = [...state.books];
            allBooks.splice(state.updateId, 1, {
                id: state.updateId,
                book: action.payload,
            });

            state.books = allBooks;
        },
    }
})

// Action creators are generated for each case reducer function
export const { addBooks, removeBooks, updateBookId, updateBook } = bookSlice.actions

export default bookSlice.reducer