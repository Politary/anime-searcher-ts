import { combineReducers } from '@reduxjs/toolkit';
import ongoingsReducer from './ongoings/ongoings.slice';
import titleReducer from './title/title.slice';

export const rootReducer = combineReducers({
    ongoings: ongoingsReducer,
    title: titleReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
