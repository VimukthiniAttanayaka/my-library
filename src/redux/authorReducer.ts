import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IAuthor {
    id: number;
    name: string;
}

interface authorsSliceState {
    authors: IAuthor[];
    updateId: number;
}
const initialState: authorsSliceState = {
    authors: [],
    updateId: -1,
}

export const authorSlice = createSlice({
    name: 'author',
    initialState,
    reducers: {
        addAuthors: (state, action: PayloadAction<string>) => {
            state.authors = [
                ...state.authors,
                {
                    id: state.authors.length,
                    name: action.payload,
                }
            ]
        },
        removeAuthors: (state, action: PayloadAction<number>) => {
            state.authors = state.authors.filter(({ id }) => id !== action.payload);
        },
        updateAuthorId: (state, action: PayloadAction<number>) => {
            state.updateId = action.payload;
        },
        updateAuthor: (state, action: PayloadAction<string>) => {
            const allAuthors = [...state.authors];
            allAuthors.splice(state.updateId, 1, {
                id: state.updateId,
                name: action.payload,
            });

            state.authors = allAuthors;
        },
    }
})

// Action creators are generated for each case reducer function
export const { addAuthors, removeAuthors, updateAuthorId, updateAuthor } = authorSlice.actions

export default authorSlice.reducer