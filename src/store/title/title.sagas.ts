import { call, put, takeEvery } from 'redux-saga/effects';
import {
    getTitle,
    getTitleSuccess,
    getTitleFailure,
    getTitleReturn,
} from './title.slice';
import { FetchObj, TitleObject } from '../../types/titleTypes';
import { PayloadAction } from '@reduxjs/toolkit';
import { API } from '../../services/axios';
import { store } from '../index';

function* getTitleAction(action: PayloadAction<number>) {
    const prevTitle: Partial<TitleObject> = store.getState().title.data;
    if (Number(prevTitle.mal_id) !== Number(action.payload)) {
        console.log('equal');
        try {
            const titleData: FetchObj = yield call(() =>
                API.get(`/anime/${action.payload}`)
            );
            yield put(getTitleSuccess(titleData.data.data));
        } catch (error) {
            yield put(getTitleFailure(error));
        }
    } else {
        console.log('duplicate request');
        yield put(getTitleReturn());
    }
}

function* titleSaga() {
    yield takeEvery(getTitle, getTitleAction);
}

export default titleSaga;
