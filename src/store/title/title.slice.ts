import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TitleObject } from '../../types/titleTypes';

const initialState = {
    status: 'idle',
    data: {},
};

const titleSlice = createSlice({
    name: 'title',
    initialState: initialState,
    reducers: {
        getTitle: (state, action) => {
            state.status = 'loading';
        },
        getTitleSuccess: (state, action: PayloadAction<TitleObject>) => {
            state.status = 'loaded';
            (state.data as {}) = action.payload;
        },
        getTitleFailure: (state, action) => {
            state.status = 'error';
        },
    },
});

export default titleSlice.reducer;
export const { getTitle, getTitleSuccess, getTitleFailure } =
    titleSlice.actions;
