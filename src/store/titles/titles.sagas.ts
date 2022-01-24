import { call, put, takeEvery } from 'redux-saga/effects';
import {
    getTitles,
    getTitlesSuccess,
    getTitlesReturn,
    getTitlesOptions,
    getTitlesFailure,
} from './titles.slice';
import { SearchOptions } from '../../types/types';
import { FetchList } from '../../types/titleTypes';
import { PayloadAction } from '@reduxjs/toolkit';
import { API } from '../../services/axios';
import { store } from '../index';
import { shallowEqual } from '../../utils/shallowEqual';

function* getTitlesAction(action: PayloadAction<SearchOptions>) {
    const prevOptions = store.getState().titles.options;
    const searchParams = {
        q: action.payload.q,
        page: action.payload.page,
        status: action.payload.status,
        rated: action.payload.rated,
        genre: action.payload.genre,
        score: action.payload.score,
        limit: action.payload.limit,
        order_by: action.payload.order_by,
        sort: action.payload.sort,
        letter: action.payload.letter,
    };
    try {
        if (!shallowEqual(prevOptions, searchParams)) {
            const titlesData: FetchList = yield call(() =>
                API.get(`/${action.payload.type}`, {
                    params: {
                        ...searchParams,
                    },
                })
            );
            console.log('success');
            console.log(titlesData);
            yield put(getTitlesSuccess(titlesData.data));
            yield put(getTitlesOptions(searchParams));
        } else {
            console.log('duplicate request');
            yield put(getTitlesReturn());
        }
    } catch (error) {
        yield put(getTitlesFailure(error));
    }
}

function* titlesSaga() {
    yield takeEvery(getTitles, getTitlesAction);
}

export default titlesSaga;
