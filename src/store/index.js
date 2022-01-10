import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
// import animeSaga from './main/main.sagas';
import { rootReducer } from './root.reducer';

// const saga = createSagaMiddleware();

export const store = configureStore({
    reducer: rootReducer,
    // middleware: [saga],
});

// saga.run(weatherSaga);
