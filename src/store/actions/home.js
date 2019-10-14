import * as actionTypes from "../actions/actionTypes";

export const fetchHomeVideosStart = () => {
  return {
    type: actionTypes.FETCH_HOME_VIDEOS_START
  };
};

export const fetchHomeVideosSuccess = (
  videos,
  nextPageToken,
  totalResults,
  searchType
) => {
  return {
    type: actionTypes.FETCH_HOME_VIDEOS_SUCCESS,
    videos,
    nextPageToken,
    totalResults,
    searchType
  };
};

export const fetchHomeVideosFail = error => {
  return {
    type: actionTypes.FETCH_HOME_VIDEOS_FAIL,
    error: error
  };
};

export const fetchHomeVideos = (nextPageToken, searchType, query) => {
  return {
    type: actionTypes.FETCH_HOME_VIDEOS,
    nextPageToken,
    searchType,
    query
  };
};

export const setSearchTerm = searchTerm => {
  return {
    type: actionTypes.SET_SEARCH_TERM,
    searchTerm
  };
};

export const fetchSearchVideos = (nextPageToken, searchTerm, reset) => {
  return {
    type: actionTypes.FETCH_SEARCH_VIDEOS,
    nextPageToken,
    searchTerm,
    reset
  };
};

export const fetchSearchVideosStart = () => {
  return {
    type: actionTypes.FETCH_SEARCH_VIDEOS_START
  };
};

export const fetchSearchVideosSuccess = (
  videos,
  nextPageToken,
  totalResults,
  searchTerm
) => {
  return {
    type: actionTypes.FETCH_SEARCH_VIDEOS_SUCCESS,
    videos,
    nextPageToken,
    totalResults,
    searchTerm
  };
};

export const fetchSearchVideosFail = error => {
  return {
    type: actionTypes.FETCH_SEARCH_VIDEOS_FAIL,
    error: error
  };
};

export const getVideoTime = id => {
  return {
    type: actionTypes.GET_VIDEO_TIME,
    id
  };
};
