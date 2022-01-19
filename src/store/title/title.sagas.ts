import { call, put, takeEvery } from 'redux-saga/effects';
import { getTitle, getTitleSuccess, getTitleFailure } from './title.slice';
import { FetchObj } from '../../types/types';
import { PayloadAction } from '@reduxjs/toolkit';
import { API } from '../../services/axios';

function* getTitleAction(action: PayloadAction<number>) {
    try {
        const titleData: FetchObj = yield call(() =>
            API.get(`/anime/${action.payload}`)
        );
        yield put(getTitleSuccess(titleData.data.data));
    } catch (error) {
        yield put(getTitleFailure(error));
    }
}

function* titleSaga() {
    yield takeEvery(getTitle, getTitleAction);
}

export default titleSaga;
