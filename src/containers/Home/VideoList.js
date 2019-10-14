import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import queryString from "query-string";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";
import debounce from "lodash.debounce";

import SingleVideo from "./SingleVideo";
import * as actions from "../../store/actions/index";

const VideoList = props => {
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", debounceHandleScroll);
    return () => window.removeEventListener("scroll", debounceHandleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (props.loading) return;
    fetchMoreVideos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFetching, queryString.parse(props.location.search).search_query]);

  let debounceHandleScroll = debounce(handleScroll, 300);

  function handleScroll() {
    let d = document.documentElement;
    let offset = d.scrollTop + window.innerHeight;
    let height = d.offsetHeight;

    if (Math.ceil(offset) === height) {
      setIsFetching(false);
    }
  }

  function fetchMoreVideos() {
    setIsFetching(true);
    let params = queryString.parse(props.location.search);
    if (props.queryType === "search") {
      if (
        props.totalResults > 0
          ? props.totalResults > props.searchVideos.length
          : true && !props.loading
      ) {
        props.onSearch(
          props.searchTerm !== props.prevSearchTerm ? "" : props.nextPageToken,
          params.search_query,
          false
        );
      }
    } else {
      if (
        props.totalResults > 0
          ? props.totalResults > props.homeVideos.length
          : true && !props.loading
      ) {
        props.onFetch(props.nextPageToken);
      }
    }
  }

  const loader = (
    <Row className="justify-content-center">
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </Row>
  );
  const homeContent = (
    <>
      <Row>
        {props.homeVideos.map((video, i) => (
          <Col key={i} xs={6} sm={6} md={4} lg={3} className="mb-5">
            <Link to={`/watch?v=${video.id}`}>
              <SingleVideo
                video={video}
                searchTerm={props.searchTerm}
                searchType="home"
              />
            </Link>
          </Col>
        ))}
      </Row>
      {props.loading && props.totalResults >= props.homeVideos.length && loader}
    </>
  );
  const searchContent = (
    <>
      <Row>
        {props.searchVideos.map((video, i) => (
          <Col key={i} xs={6} sm={6} md={4} lg={3} className="mb-5">
            <Link to={`/watch?v=${video.id.videoId}`}>
              <SingleVideo
                video={video}
                searchTerm={props.searchTerm}
                searchType="search"
                id={video.id.videoId}
              />
            </Link>
          </Col>
        ))}
      </Row>
      {props.loading && props.totalResults >= props.homeVideos.length && loader}
    </>
  );

  return <>{props.queryType === "search" ? searchContent : homeContent}</>;
};

const mapStateToProps = state => {
  return {
    homeVideos: state.home.homeVideos,
    searchVideos: state.home.searchVideos,
    loading: state.home.loading,
    errors: state.home.error,
    nextPageToken: state.home.nextPageToken,
    totalResults: state.home.totalResults,
    searchTerm: state.home.searchTerm,
    prevSearchTerm: state.home.prevSearchTerm
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetch: (nextPageToken, searchType, searchTerm) =>
      dispatch(actions.fetchHomeVideos(nextPageToken, searchType, searchTerm)),
    onSearch: (nextPageToken, searchTerm) =>
      dispatch(actions.fetchSearchVideos(nextPageToken, searchTerm)),
    onFetchMoreVideos: () => dispatch(actions.fetchHomeVideosStart())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(VideoList)
);
