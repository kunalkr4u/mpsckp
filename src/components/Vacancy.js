import React from "react";
import { Container, Row, Col, Breadcrumb, Button } from "react-bootstrap";
const Vacancy = () => {
  return (
    <div className="inner-body">
      <Container fluid>
        <Row className="inner">
          <div className="inner-head">
            <Col>
              <h2>Join Us</h2>
              <Breadcrumb>
                <Breadcrumb.Item href="../">
                  <i className="fa fa-home"></i> Home
                </Breadcrumb.Item>
                <Breadcrumb.Item active>Join Us</Breadcrumb.Item>
              </Breadcrumb>
            </Col>
          </div>
        </Row>
      </Container>
      <div className="mib">
        <Container>
          <Row>
            <Col>
              <p>
                <b>MPS</b> believes that tomorrow’s leaders need an excellent
                foundation, cultivated in an environment that is both caring and
                challenging, where they can thrive and develop. <b>MPS</b>{" "}
                teachers promote rigorous learning by actively engaging students
                and challenging them to reach their full potential. Two distinct
                divisions : Primary School and High School, headed by a
                principal and one vice principal.{" "}
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button href="https://www.mpsckp.com/vacancy/career.php" target="_blank">Apply Now</Button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Vacancy;
