import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import titlesSaga from './titles/titles.sagas.ts';
import titleSaga from './title/title.sagas';
import { rootReducer } from './root.reducer.ts';

const saga = createSagaMiddleware();

export const store = configureStore({
    reducer: rootReducer,
    middleware: [saga],
});

saga.run(titlesSaga);
saga.run(titleSaga);
