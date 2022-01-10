import { combineReducers } from '@reduxjs/toolkit';
import animeReducer from './main/main.slice';

export const rootReducer = combineReducers({
    anime: animeReducer,
});
