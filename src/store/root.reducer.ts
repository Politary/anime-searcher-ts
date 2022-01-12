import { combineReducers } from '@reduxjs/toolkit';
import ongoingsReducer from './ongoings/ongoings.slice';

export const rootReducer = combineReducers({
    ongoings: ongoingsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
