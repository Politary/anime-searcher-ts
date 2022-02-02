import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SearchOptions } from '../../types/types';
import { FetchTitles, TitleObject } from '../../types/titleTypes';
import { TitleArray } from '../../types/titleTypes';

const initialState: FetchTitles = {
    status: 'idle',
    list: [],
    pagination: {},
    options: {},
};

const titlesSlice = createSlice({
    name: 'titles',
    initialState: initialState,
    reducers: {
        getTitles: (state, action: PayloadAction<Partial<SearchOptions>>) => {
            state.status = 'loading';
        },
        getTitlesSuccess: (state, action: PayloadAction<TitleArray>) => {
            state.status = 'loaded';
            state.list = action.payload.data;
            state.pagination = action.payload.pagination;
        },
        getTitlesReturn: (state) => {
            state.status = 'loaded';
        },
        getTitlesOptions: (
            state,
            action: PayloadAction<Partial<TitleObject>>
        ) => {
            state.options = action.payload;
        },
        getTitlesFailure: (state, action) => {
            state.status = 'error';
            console.log(action.payload);
        },
        clearTitles: (state) => {
            state.list = [];
            state.status = 'idle';
            state.options = {};
            state.pagination = {};
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
