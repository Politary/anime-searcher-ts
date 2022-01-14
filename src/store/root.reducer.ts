import { combineReducers } from '@reduxjs/toolkit';
import titlesReducer from './titles/titles.slice';
import titleReducer from './title/title.slice';

export const rootReducer = combineReducers({
    titles: titlesReducer,
    title: titleReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
