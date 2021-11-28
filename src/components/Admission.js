import React from "react";
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
const Admission = () => {
  return (
    <div className="inner-body">
      <Container fluid>
        <Row className="inner">
          <div className="inner-head">
            <Col>
              <h2>Admission</h2>
              <Breadcrumb>
                <Breadcrumb.Item href="../">
                  <i className="fa fa-home"></i> Home
                </Breadcrumb.Item>
                <Breadcrumb.Item active>Admission</Breadcrumb.Item>
              </Breadcrumb>
            </Col>
          </div>
        </Row>
      </Container>
      <div className="mib">
        <Container>
          <Row>
            <Col>
              <ul>
                <li>
                  Admission is granted on the basis of first come first serve.
                </li>
                <li>
                  Admission is based on child’s capability and the marks
                  obtained by him/her in previous schol.
                </li>
                <li>
                  Admission from Class-II onwards depends upon availability of
                  the seats in each class.
                </li>
                <li>
                  At the time of admission Birth certificate issued by Village
                  Panchayat / Municipality / Hospital authority will be accepted
                  during admission.
                </li>
                <li>
                  Transfer Certificate (TC) issued by previous school will be
                  required for the students seeking admission from Class-II
                  onwards.
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="bg-orange">
        <Container>
          <Row>
            <Col>
              <h4>Age Criteria</h4>
              <ul>
                <li>
                  <strong>Nursery</strong> : Child should be 3+ on the 31
                  <sup>st</sup> of March.
                </li>
                <li>
                  <strong>L.K.G.</strong> : Child should be 4+ on the 31
                  <sup>st</sup> of March.
                </li>
                <li>
                  <strong>U.K.G.</strong> : Child should be 5+ on the 31
                  <sup>st</sup> of March.{" "}
                </li>
                <li>
                  <strong>Std. I</strong> : Child should be 6+ on the 31
                  <sup>st</sup> of March.
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="bg-white">
        <Container>
          <Row>
            <Col>
              <h4>Admission Process</h4>

              <ul>
                <li>
                  Parents desirous of admission for their wards in the school
                  may contact us either personally or through E-Mail:{" "}
                  <a
                    href="mailto:mpsckp@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    mpsckp@gmail.com
                  </a>
                </li>
                <li>
                  Parents who opt for admission at MPS are required to apply on
                  prescribed Application Form, obtainable along with the
                  prospectus from the office.
                </li>
                <li>
                  First come first serve basis will be applicable and final
                  selection is based on merit and academic records of the
                  students.
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Admission;
