import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Search from "../../components/Search";
import VideoList from "../Home/VideoList";

function Results() {
  return (
    <Container className="my-3">
      <Row>
        <Col>
          <Search />
        </Col>
      </Row>
      <Row>
        <Col>
          <h4 className="display-4 mx-15">Search Results</h4>
        </Col>
      </Row>
      <VideoList queryType="search" />
    </Container>
  );
}

export default Results;
