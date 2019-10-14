import React from "react";
import "./Home.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Search from "../../components/Search";
import VideoList from "./VideoList";

function Home() {
  return (
    <Container className="my-3">
      <Row>
        <Col>
          <Search />
        </Col>
      </Row>
      <Row>
        <Col>
          <h4 className="display-4 mx-15">Top Videos</h4>
        </Col>
      </Row>
      <VideoList />
    </Container>
  );
}

export default Home;
