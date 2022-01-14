import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import ongoingsSaga from './titles/titles.sagas.ts';
import { rootReducer } from './root.reducer.ts';

const saga = createSagaMiddleware();

export const store = configureStore({
    reducer: rootReducer,
    middleware: [saga],
});

saga.run(ongoingsSaga);
