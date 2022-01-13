import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { getTitle, getTitleSuccess, getTitleFailure } from './title.slice';
import { FetchData } from '../../types/types';

function* getTitleAction() {
    try {
        const titleData: FetchData = yield call(() =>
            axios.get(
                `https://api.jikan.moe/v3/search/anime?q=&status=airing&order_by=score`
            )
        );
        console.log(titleData);
        yield put(getTitleSuccess(titleData.data.results));
    } catch (error) {
        yield put(getTitleFailure(error));
    }
}

function* titleSaga() {
    yield takeEvery(getTitle, getTitleAction);
}

export default titleSaga;
