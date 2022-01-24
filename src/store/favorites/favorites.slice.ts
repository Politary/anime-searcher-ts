import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
            state.list = state.list.filter(
                //@ts-ignore
                (item) => item !== action.payload
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
