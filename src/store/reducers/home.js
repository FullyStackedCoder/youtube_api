import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const initialState = {
  homeVideos: [],
  searchVideos: [],
  error: null,
  loading: false,
  nextPageToken: "",
  totalResults: 0,
  searchTerm: "",
  prevSearchTerm: "",
  prevType: ""
};

const fetchHomeVideosStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const fetchHomeVideosSuccess = (state, action) => {
  let videos = state.homeVideos.concat(action.videos);
  return updateObject(state, {
    homeVideos: videos,
    error: null,
    loading: false,
    nextPageToken: action.nextPageToken,
    totalResults: action.totalResults,
    prevType: action.searchType
  });
};

const fetchHomeVideosFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const setSearchTerm = (state, action) => {
  return updateObject(state, {
    searchTerm: action.searchTerm
  });
};

const fetchSearchVideosStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const fetchSearchVideosSuccess = (state, action) => {
  if (state.prevSearchTerm !== action.searchTerm) {
    return updateObject(state, {
      searchVideos: action.videos,
      error: null,
      loading: false,
      nextPageToken: action.nextPageToken,
      totalResults: action.totalResults,
      searchTerm: action.searchTerm,
      prevSearchTerm: action.searchTerm
    });
  }
  let videos = state.searchVideos.concat(action.videos);
  return updateObject(state, {
    searchVideos: videos,
    error: null,
    loading: false,
    nextPageToken: action.nextPageToken,
    totalResults: action.totalResults,
    searchTerm: action.searchTerm,
    prevSearchTerm: action.searchTerm
  });
};

const fetchSearchVideosFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_HOME_VIDEOS_START:
      return fetchHomeVideosStart(state, action);
    case actionTypes.FETCH_HOME_VIDEOS_SUCCESS:
      return fetchHomeVideosSuccess(state, action);
    case actionTypes.FETCH_HOME_VIDEOS_FAIL:
      return fetchHomeVideosFail(state, action);
    case actionTypes.SET_SEARCH_TERM:
      return setSearchTerm(state, action);
    case actionTypes.FETCH_SEARCH_VIDEOS_START:
      return fetchSearchVideosStart(state, action);
    case actionTypes.FETCH_SEARCH_VIDEOS_SUCCESS:
      return fetchSearchVideosSuccess(state, action);
    case actionTypes.FETCH_SEARCH_VIDEOS_FAIL:
      return fetchSearchVideosFail(state, action);
    default:
      return state;
  }
};

export default homeReducer;
