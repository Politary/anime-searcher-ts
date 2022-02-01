import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TitleObject } from '../../types/titleTypes';

const initialState: any = {
    list: [],
    filteredList: [],
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
        filterFavorites: (state, action: PayloadAction<any>) => {
            console.log(action.payload);
            state.filteredList = state.list.filter(
                //@ts-ignore
                (task) =>
                    task.title
                        .toLowerCase()
                        .includes(action.payload.q.toLowerCase())
            );
        },
        clearFavorites: (state) => {
            state.list = [];
        },
    },
});

export default favoritesSlice.reducer;
export const {
    addToFavorites,
    removeFromFavorites,
    filterFavorites,
    clearFavorites,
} = favoritesSlice.actions;
