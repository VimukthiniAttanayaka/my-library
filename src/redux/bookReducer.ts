import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Book {
    name: string;
    price: string;
    author: string;
}
interface IBook {
    id: number;
    name: string;
    price: string;
    author: string;
}

interface booksSliceState {
    books: IBook[];
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
        addBooks: (state, action: PayloadAction<Book>) => {
            state.books = [
                ...state.books,
                {
                    id: state.books.length,
                    name: action.payload.name,
                    price: action.payload.price,
                    author: action.payload.author,
                }
            ]
        },
        removeBooks: (state, action: PayloadAction<number>) => {
            state.books = state.books.filter(({ id }) => id !== action.payload);
        },
        updateBookId: (state, action: PayloadAction<number>) => {
            state.updateId = action.payload;
        },
        updateBook: (state, action: PayloadAction<Book>) => {
            const allBooks = [...state.books];
            allBooks.splice(state.updateId, 1, {
                id: state.updateId,
                name: action.payload.name,
                    price: action.payload.price,
                    author: action.payload.author,
            });

            state.books = allBooks;
        },
    }
})

// Action creators are generated for each case reducer function
export const { addBooks, removeBooks, updateBookId, updateBook } = bookSlice.actions

export default bookSlice.reducer