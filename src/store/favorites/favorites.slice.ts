import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TitleObject, TitleObjectMin } from '../../types/titleTypes';
import { compareTitle } from '../../utils/compareTitle';
import { compareScore } from '../../utils/compareScore';
import { SearchOptions } from '../../types/types';

export interface Favorites {
    list: TitleObjectMin[];
    filteredList: TitleObjectMin[];
    options: {
        q: string;
        order_by: string;
    };
}

const initialState: Favorites = {
    list: [],
    filteredList: [],
    options: {
        q: '',
        order_by: 'score',
    },
};

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: initialState,
    reducers: {
        addToFavorites: (state, action: PayloadAction<TitleObjectMin>) => {
            state.list.push(action.payload);
        },
        removeFromFavorites: (state, action: PayloadAction<TitleObjectMin>) => {
            console.log(action.payload);
            console.log(state.list);
            state.list = state.list.filter(
                (item: Partial<TitleObject>) =>
                    item.mal_id !== action.payload.mal_id
            );
        },
        filterFavorites: (
            state,
            action: PayloadAction<Partial<SearchOptions>>
        ) => {
            console.log(action.payload);
            state.filteredList = state.list.filter((task) =>
                task.title
                    .toLowerCase()
                    .includes(action.payload.q!.toLowerCase())
            );
            if (action.payload.order_by === 'title')
                state.filteredList = state.filteredList.sort(compareTitle);
            if (action.payload.order_by === 'score')
                state.filteredList = state.filteredList.sort(compareScore);
        },
        setSearchQuery: (state, action) => {
            state.options.q = action.payload;
        },
        setSearchOrder: (state, action) => {
            state.options.order_by = action.payload;
        },
    },
});

export default favoritesSlice.reducer;
export const {
    addToFavorites,
    removeFromFavorites,
    filterFavorites,
    setSearchOrder,
    setSearchQuery,
} = favoritesSlice.actions;
