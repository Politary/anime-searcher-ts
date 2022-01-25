import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: any = {
    list: [],
    status: 'idle',
};

const genresSlice = createSlice({
    name: 'genres',
    initialState: initialState,
    reducers: {
        getGenres: (state) => {
            state.status = 'loading';
        },
        getGenresSuccess: (state, action: PayloadAction<any>) => {
            state.status = 'loaded';
            state.list = action.payload.data;
        },
        getGenresFailure: (state, action: PayloadAction<any>) => {
            state.status = 'error';
            console.log(action.payload);
        },
    },
});

export default genresSlice.reducer;
export const { getGenres, getGenresSuccess, getGenresFailure } =
    genresSlice.actions;
