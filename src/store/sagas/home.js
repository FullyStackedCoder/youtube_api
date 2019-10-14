import { put } from "redux-saga/effects";
import axios from "axios";

import * as actions from "../actions/index";

export function* fetchHomeVideosSaga(action) {
  yield put(actions.fetchHomeVideosStart());
  let pageToken = `pageToken=""`;
  if (action.nextPageToken) {
    pageToken = `pageToken=${action.nextPageToken}`;
  }
  let url = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails&chart=mostPopular&regionCode=IN&key=${process.env.REACT_APP_API_KEY}&maxResults=12&${pageToken}`;

  try {
    const response = yield axios.get(url);
    yield put(
      actions.fetchHomeVideosSuccess(
        response.data.items,
        response.data.nextPageToken,
        response.data.pageInfo.totalResults,
        action.searchType
      )
    );
  } catch (error) {
    yield put(actions.fetchHomeVideosFail(error));
  }
}

export function* fetchSearchVideosSaga(action) {
  yield put(actions.fetchSearchVideosStart());
  let url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURI(
    action.searchTerm
  )}&type=video&videoCaption=closedCaption&key=${
    process.env.REACT_APP_API_KEY
  }&maxResults=12&pageToken=${action.nextPageToken}`;

  try {
    const response = yield axios.get(url);
    yield put(
      actions.fetchSearchVideosSuccess(
        response.data.items,
        response.data.nextPageToken,
        response.data.pageInfo.totalResults,
        action.searchTerm
      )
    );
  } catch (error) {
    yield put(actions.fetchSearchVideosFail(error));
  }
}

export function* getVideoTimeSaga(action) {
  let url = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails&id=${action.id}&key=${process.env.REACT_APP_API_KEY}`;

  try {
    const response = yield axios.get(url);
    console.log(response.data.items[0].contentDetails.duration);
    return response.data.items[0].contentDetails.duration;
  } catch (error) {
    console.log(error);
  }
}
