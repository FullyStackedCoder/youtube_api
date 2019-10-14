import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import queryString from "query-string";

import Search from "../../components/Search";
import VideoDetails from "../../components/VideoDetails";
import VideoList from "../../components/VideoList";

function Results(props) {
  return (
    <Container className="my-3">
      <Row>
        <Col>
          <Search />
        </Col>
      </Row>
      <Row className="mt-5">
        <Col lg={8}>
          <VideoDetails id={queryString.parse(props.location.search).v} />
        </Col>
        <Col lg={4}>
          <h5>Related Videos</h5>
          <VideoList id={queryString.parse(props.location.search).v} />
        </Col>
      </Row>
    </Container>
  );
}

export default Results;
