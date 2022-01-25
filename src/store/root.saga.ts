import { all } from 'redux-saga/effects';
import titleSaga from './title/title.sagas';
import titlesSaga from './titles/titles.sagas';
import genresSaga from './genres/genres.sagas';

export default function* rootSaga() {
    yield all([titleSaga(), titlesSaga(), genresSaga()]);
}
