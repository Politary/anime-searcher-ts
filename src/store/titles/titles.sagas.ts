import { call, put, takeEvery } from 'redux-saga/effects';
import { getTitles, getTitlesSuccess, getTitlesFailure } from './titles.slice';
import { FetchList, SearchOptions } from '../../types/types';
import { PayloadAction } from '@reduxjs/toolkit';
import { API } from '../../services/axios';

function* getTitlesAction(action: PayloadAction<SearchOptions>) {
    try {
        const titlesData: FetchList = yield call(() =>
            API.get(`/search/${action.payload.type}`, {
                params: {
                    page: action.payload.page,
                    status: action.payload.status,
                    rated: action.payload.rated,
                    genre: action.payload.genre,
                    score: action.payload.score,
                    limit: action.payload.limit,
                    order_by: action.payload.order_by,
                    sort: action.payload.sort,
                    letter: action.payload.letter,
                },
            })
        );
        yield put(getTitlesSuccess(titlesData.data.results));
    } catch (error) {
        yield put(getTitlesFailure(error));
    }
}

function* titlesSaga() {
    yield takeEvery(getTitles, getTitlesAction);
}

export default titlesSaga;
