import React from "react";
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
const Gallery = () => {
  return (
    <div>
      <Container fluid>
        <Row className="inner">
          <div className="inner-head">
            <Col>
              <h2>Gallery</h2>
              <Breadcrumb>
                <Breadcrumb.Item href="../">
                  <i className="fa fa-home"></i> Home
                </Breadcrumb.Item>
                <Breadcrumb.Item active>Gallery</Breadcrumb.Item>
              </Breadcrumb>
            </Col>
          </div>
        </Row>
      </Container>
      <div className="mib">
        <Container>
          <Row>
            <Col></Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Gallery;
