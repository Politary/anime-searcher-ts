import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AnimeDetails, FetchTitles } from '../../types/types';

const initialState: FetchTitles = {
    status: 'idle',
    list: [],
};

const titlesSlice = createSlice({
    name: 'titles',
    initialState: initialState,
    reducers: {
        getTitles: (state) => {
            console.log('getTitles');
            state.status = 'loading';
        },
        getTitlesSuccess: (state, action: PayloadAction<AnimeDetails>) => {
            console.log('Success');
            state.status = 'loaded';
            (state.list as {}) = action.payload;
        },
        getTitlesFailure: (state, action) => {
            console.log(action.payload);
            state.status = 'error';
        },
    },
});

export default titlesSlice.reducer;
export const { getTitles, getTitlesSuccess, getTitlesFailure } =
    titlesSlice.actions;
