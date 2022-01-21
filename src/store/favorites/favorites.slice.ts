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
            if (!state.list.includes(action.payload)) {
                console.log('added');
                state.list.push(action.payload);
            } else {
                console.log('deleted');
                state.list = state.list.filter(
                    //@ts-ignore
                    (item) => item !== action.payload
                );
            }
        },
        clearFavorites: (state) => {
            state.list = [];
        },
    },
});

export default favoritesSlice.reducer;
export const { addToFavorites, clearFavorites } = favoritesSlice.actions;