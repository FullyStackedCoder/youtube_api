import { put } from "redux-saga/effects";
import axios from "axios";

import * as actions from "../actions/index";

export function* fetchRelatedVideosSaga(action) {
  yield put(actions.fetchRelatedVideosStart());

  let url = `https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${action.id}&type=video&key=${process.env.REACT_APP_API_KEY}&maxResults=12&pageToken=${action.nextPageToken}`;

  try {
    const response = yield axios.get(url);
    yield put(
      actions.fetchRelatedVideosSuccess(
        response.data.items,
        response.data.nextPageToken,
        response.data.pageInfo.totalResults
      )
    );
  } catch (error) {
    yield put(actions.fetchRelatedVideosFail(error));
  }
}
