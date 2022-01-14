import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TitleDetails } from '../../types/types';

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
        getTitleSuccess: (state, action: PayloadAction<TitleDetails>) => {
            console.log(action.payload);
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
