import { createSlice } from '@reduxjs/toolkit';

const animeSlice = createSlice({
    name: 'anime',
    reducers: {
        getAnime: (state) => {
            console.log('getAnime');
        },
    },
});

export default animeSlice.reducer;
export const { getAnime } = animeSlice.actions;
