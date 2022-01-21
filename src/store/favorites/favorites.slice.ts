import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {} from '../../types/types';

const initialState: any = {
    list: [],
};

const favoritesSlice = createSlice({
    name: 'titles',
    initialState: initialState,
    reducers: {
        addToFavorites: (state, action: PayloadAction<any>) => {
            state.list.push(action.payload);
        },
        clearFavorites: (state) => {
            state.list = [];
        },
    },
});

export default favoritesSlice.reducer;
export const { addToFavorites, clearFavorites } = favoritesSlice.actions;
