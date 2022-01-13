import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AnimeDetails, FetchOngoings } from '../../types/types';

const initialState: FetchOngoings = {
    status: 'idle',
    list: [],
};

const ongoingsSlice = createSlice({
    name: 'ongoings',
    initialState: initialState,
    reducers: {
        getOngoings: (state) => {
            console.log('getOngoings');
            state.status = 'loading';
        },
        getOngoingsSuccess: (state, action: PayloadAction<AnimeDetails>) => {
            console.log('Success');
            state.status = 'loaded';
            (state.list as {}) = action.payload;
        },
        getOngoingsFailure: (state, action) => {
            console.log(action.payload);
            state.status = 'error';
        },
    },
});

export default ongoingsSlice.reducer;
export const { getOngoings, getOngoingsSuccess, getOngoingsFailure } =
    ongoingsSlice.actions;
