import { createSlice } from '@reduxjs/toolkit';

const ongoingsSlice = createSlice({
    name: 'ongoings',
    initialState: {
        status: 'idle',
        list: [],
    },
    reducers: {
        getOngoings: (state) => {
            console.log('getOngoings');
            state.status = 'loading';
        },
        getOngoingsSuccess: (state, action) => {
            console.log('Success');
            state.status = 'loaded';
            state.list = action.payload;
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
