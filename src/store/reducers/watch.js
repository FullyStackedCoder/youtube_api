import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const initialState = {
  videos: [],
  error: null,
  loading: false,
  nextPageToken: "",
  totalResults: 0
};

const fetchRelatedVideosStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const fetchRelatedVideosSuccess = (state, action) => {
  let videos = state.videos.concat(action.videos);
  return updateObject(state, {
    videos: videos,
    error: null,
    loading: false,
    nextPageToken: action.nextPageToken,
    totalResults: action.totalResults
  });
};

const fetchRelatedVideosFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const watchReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_RELATED_VIDEOS_START:
      return fetchRelatedVideosStart(state, action);
    case actionTypes.FETCH_RELATED_VIDEOS_SUCCESS:
      return fetchRelatedVideosSuccess(state, action);
    case actionTypes.FETCH_RELATED_VIDEOS_FAIL:
      return fetchRelatedVideosFail(state, action);
    default:
      return state;
  }
};

export default watchReducer;
