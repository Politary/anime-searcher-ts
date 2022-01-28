import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TitleObject } from '../../types/titleTypes';

const initialState: any = {
    list: [],
};

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: initialState,
    reducers: {
        addToFavorites: (state, action: PayloadAction<any>) => {
            state.list.push(action.payload);
        },
        removeFromFavorites: (state, action: PayloadAction<any>) => {
            console.log(action.payload);
            console.log(state.list);
            state.list = state.list.filter(
                (item: TitleObject) => item.mal_id !== action.payload.mal_id
            );
        },
        clearFavorites: (state) => {
            state.list = [];
        },
    },
});

export default favoritesSlice.reducer;
export const { addToFavorites, removeFromFavorites, clearFavorites } =
    favoritesSlice.actions;
