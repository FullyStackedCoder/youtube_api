import { takeEvery, all } from "redux-saga/effects";

import * as actionTypes from "../actions/actionTypes";

import {
  fetchHomeVideosSaga,
  fetchSearchVideosSaga,
  getVideoTimeSaga
} from "./home";

import { fetchRelatedVideosSaga } from "./watch";

export function* watchHome() {
  yield all([
    takeEvery(actionTypes.FETCH_HOME_VIDEOS, fetchHomeVideosSaga),
    takeEvery(actionTypes.FETCH_SEARCH_VIDEOS, fetchSearchVideosSaga),
    takeEvery(actionTypes.GET_VIDEO_TIME, getVideoTimeSaga)
  ]);
}

export function* watchWatch() {
  yield all([
    takeEvery(actionTypes.FETCH_RELATED_VIDEOS, fetchRelatedVideosSaga)
  ]);
}
