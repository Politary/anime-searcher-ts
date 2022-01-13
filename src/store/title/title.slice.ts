import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AnimeDetails } from '../../types/types';

const initialState = {
    status: 'idle',
    list: [],
};

const titleSlice = createSlice({
    name: 'title',
    initialState: initialState,
    reducers: {
        getTitle: (state) => {
            console.log('getOngoings');
            state.status = 'loading';
        },
        getTitleSuccess: (state, action: PayloadAction<AnimeDetails>) => {
            console.log('Success');
            state.status = 'loaded';
            (state.list as {}) = action.payload;
        },
        getTitleFailure: (state, action) => {
            console.log(action.payload);
            state.status = 'error';
        },
    },
});

export default titleSlice.reducer;
export const { getTitle, getTitleSuccess, getTitleFailure } =
    titleSlice.actions;
