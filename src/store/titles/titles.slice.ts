import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AnimeDetails, SearchOptions } from '../../types/types';
import { FetchTitles } from '../../types/titleTypes';
import { TitleArray } from '../../types/titleTypes';

const initialState: FetchTitles = {
    status: 'idle',
    list: [],
    options: {},
};

const titlesSlice = createSlice({
    name: 'titles',
    initialState: initialState,
    reducers: {
        getTitles: (state, action: PayloadAction<SearchOptions>) => {
            state.status = 'loading';
        },
        getTitlesSuccess: (
            state,
            action: PayloadAction<Partial<TitleArray>>
        ) => {
            state.status = 'loaded';
            (state.list as {}) = action.payload;
        },
        getTitlesReturn: (state) => {
            state.status = 'loaded';
            (state.list as {}) = state.list;
        },
        getTitlesOptions: (
            state,
            action: PayloadAction<Partial<AnimeDetails>>
        ) => {
            state.options = action.payload;
        },
        getTitlesFailure: (state, action) => {
            state.status = 'error';
            console.log(action.payload);
        },
        clearTitles: (state) => {
            (state.list as {}) = {};
            state.status = 'idle';
            state.options = {};
        },
    },
});

export default titlesSlice.reducer;
export const {
    getTitles,
    getTitlesSuccess,
    getTitlesReturn,
    getTitlesOptions,
    getTitlesFailure,
    clearTitles,
} = titlesSlice.actions;
