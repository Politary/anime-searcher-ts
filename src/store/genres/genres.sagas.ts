import { call, put, takeEvery } from 'redux-saga/effects';
import { getGenres, getGenresSuccess, getGenresFailure } from './genres.slice';
import { API } from '../../services/axios';

function* getGenresAction() {
    try {
        //@ts-ignore
        const genresData = yield call(() => API.get(`/genres/anime`));
        console.log('success');
        console.log(genresData);
        yield put(getGenresSuccess(genresData.data));
    } catch (error) {
        yield put(getGenresFailure(error));
    }
}

function* genresSaga() {
    yield takeEvery(getGenres, getGenresAction);
}

export default genresSaga;
