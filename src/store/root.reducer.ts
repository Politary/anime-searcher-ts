import { combineReducers } from '@reduxjs/toolkit';
import titlesReducer from './titles/titles.slice';
import titleReducer from './title/title.slice';
import favoritesReducer from './favorites/favorites.slice';

export const rootReducer = combineReducers({
    titles: titlesReducer,
    title: titleReducer,
    favorites: favoritesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
