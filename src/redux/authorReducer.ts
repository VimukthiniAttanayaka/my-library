import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IAuthor {
    id: number;
    name: string;
}

interface authorsSliceState {
    authors: IAuthor[];
    updateId: number;
    isFormVisible: boolean;
}
const initialState: authorsSliceState = {
    authors: [],
    updateId: -1,
    isFormVisible: false,
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
        formVisible: (state, action: PayloadAction<boolean>) => {
            state.isFormVisible = action.payload;
        },
    }
})

// Action creators are generated for each case reducer function
export const { addAuthors, removeAuthors, updateAuthorId, updateAuthor, formVisible } = authorSlice.actions

export default authorSlice.reducer