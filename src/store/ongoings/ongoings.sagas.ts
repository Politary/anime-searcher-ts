import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import {
    getOngoings,
    getOngoingsSuccess,
    getOngoingsFailure,
} from './ongoings.slice';

function* getOngoingsAction() {
    try {
        const ongoingsData = yield call(() =>
            axios.get(
                `https://api.jikan.moe/v3/search/anime?q=&status=airing&order_by=score`
            )
        );
        console.log(ongoingsData);
        yield put(getOngoingsSuccess(ongoingsData.data.results));
    } catch (error) {
        yield put(getOngoingsFailure(error));
    }
}

function* ongoingsSaga() {
    yield takeEvery(getOngoings, getOngoingsAction);
}

export default ongoingsSaga;
