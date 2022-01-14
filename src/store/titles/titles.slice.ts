import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AnimeDetails, FetchTitles, SearchOptions } from '../../types/types';

const initialState: FetchTitles = {
    status: 'idle',
    list: [],
};

const titlesSlice = createSlice({
    name: 'titles',
    initialState: initialState,
    reducers: {
        getTitles: (state, action: PayloadAction<SearchOptions>) => {
            state.status = 'loading';
        },
        getTitlesSuccess: (state, action: PayloadAction<AnimeDetails>) => {
            state.status = 'loaded';
            (state.list as {}) = action.payload;
        },
        getTitlesFailure: (state, action) => {
            state.status = 'error';
        },
    },
});

export default titlesSlice.reducer;
export const { getTitles, getTitlesSuccess, getTitlesFailure } =
    titlesSlice.actions;
