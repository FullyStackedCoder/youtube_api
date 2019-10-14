import * as actionTypes from "../actions/actionTypes";

export const fetchRelatedVideosStart = () => {
  return {
    type: actionTypes.FETCH_RELATED_VIDEOS_START
  };
};

export const fetchRelatedVideosSuccess = (
  videos,
  nextPageToken,
  totalResults
) => {
  return {
    type: actionTypes.FETCH_RELATED_VIDEOS_SUCCESS,
    videos,
    nextPageToken,
    totalResults
  };
};

export const fetchRelatedVideosFail = error => {
  return {
    type: actionTypes.FETCH_RELATED_VIDEOS_FAIL,
    error: error
  };
};

export const fetchRelatedVideos = (id, nextPageToken) => {
  return {
    type: actionTypes.FETCH_RELATED_VIDEOS,
    id,
    nextPageToken
  };
};
