import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { getTitles, getTitlesSuccess, getTitlesFailure } from './titles.slice';
import { FetchData, SearchOptions } from '../../types/types';
import { PayloadAction } from '@reduxjs/toolkit';
import { API } from '../../core/axios';

function* getTitlesAction(action: PayloadAction<SearchOptions>) {
    try {
        const titlesData: FetchData = yield call(() =>
            API.get(`${action.payload.type}`, {
                params: {
                    status: action.payload.status,
                    limit: action.payload.limit,
                    order_by: action.payload.order_by,
                },
            })
        );
        console.log(action.payload);
        yield put(getTitlesSuccess(titlesData.data.results));
    } catch (error) {
        yield put(getTitlesFailure(error));
    }
}

function* titlesSaga() {
    yield takeEvery(getTitles, getTitlesAction);
}

export default titlesSaga;
