import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { getTitles, getTitlesSuccess, getTitlesFailure } from './titles.slice';
import { FetchData } from '../../types/types';

function* getTitlesAction() {
    try {
        const titlesData: FetchData = yield call(() =>
            axios.get(
                `https://api.jikan.moe/v3/search/anime?q=&status=airing&order_by=score`
            )
        );
        console.log(titlesData);
        yield put(getTitlesSuccess(titlesData.data.results));
    } catch (error) {
        yield put(getTitlesFailure(error));
    }
}

function* titlesSaga() {
    yield takeEvery(getTitles, getTitlesAction);
}

export default titlesSaga;
