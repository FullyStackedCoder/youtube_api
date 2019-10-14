import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import queryString from "query-string";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";
import debounce from "lodash.debounce";

import Video from "../Video";
import * as actions from "../../store/actions";

const VideoList = props => {
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", debounceHandleScroll);
    return () => window.removeEventListener("scroll", debounceHandleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFetching, queryString.parse(props.location.search).v]);

  useEffect(() => {
    if (props.loading) return;
    fetchMoreVideos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFetching]);

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
    if (
      props.totalResults > 0
        ? props.totalResults > props.videos.length
        : true && !props.loading
    ) {
      props.onFetch(params.v, props.nextPageToken);
    }
  }

  const loader = (
    <Row className="justify-content-center">
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </Row>
  );

  const content = (
    <>
      <Row>
        {props.videos.map((video, i) => (
          <Col key={i} sm={12} md={6} lg={12} className="mb-5">
            <Link to={`/watch?v=${video.id.videoId}`}>
              <Video video={video} />
            </Link>
          </Col>
        ))}
      </Row>
      {props.loading && props.totalResults >= props.videos.length && loader}
    </>
  );

  return <>{content}</>;
};

const mapStateToProps = state => {
  return {
    videos: state.watch.videos,
    loading: state.watch.loading,
    errors: state.watch.error,
    nextPageToken: state.watch.nextPageToken,
    totalResults: state.watch.totalResults
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetch: (id, nextPageToken) =>
      dispatch(actions.fetchRelatedVideos(id, nextPageToken))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(VideoList)
);
