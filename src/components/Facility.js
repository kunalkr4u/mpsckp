import React from "react";
import { Container, Row, Col, Breadcrumb, Button } from "react-bootstrap";
const Facility = () => {
  return (
    <div className="inner-body">
      <Container fluid>
        <Row className="inner">
          <div className="inner-head">
            <Col>
              <h2>Facility</h2>
              <Breadcrumb>
                <Breadcrumb.Item href="../">
                  <i className="fa fa-home"></i> Home
                </Breadcrumb.Item>
                <Breadcrumb.Item active>Facility</Breadcrumb.Item>
              </Breadcrumb>
            </Col>
          </div>
        </Row>
      </Container>
      <div className="mib">
        <Container>
          <Row>
            <Col>
              <h4>Hostel</h4>
              <h6>Home Is Where The Heart</h6>
              <p>
                The Benifits of Hostel life in your child's overall education
                and developement are well known. It encourgaes independence, the
                ability to cope with the environment, encourages peer
                interaction and developes leadership qualities. Residential
                facilities also bring quality education. At MRS residential
                facilities are like a home away from home for your child.
              </p>
              <ul>
                <li>Seperate Hostel for boys and girls.</li>
                <li>Airy and hygienic dormitories.</li>
                <li>Supervised study hours by hostel teacher.</li>
                <li>Open playground for games and sports.</li>
              </ul>
              <h4>Other Facilities</h4>
              <ul>
                <li>Airy and spacious class rooms.</li>
                <li>Audio-Visual room for kids.</li>
                <li>Digital Class Rooms for interactive learning.</li>
                <li>Well-stacked library cum reading room.</li>
                <li>Computer lab with latest software.</li>
                <li>Well- equipped Science Lab.</li>
                <li>
                  Separate Labs for various subjects (like Maths Labs &amp; S.St
                  Labs).
                </li>
                <li>Activity hall for CCA.</li>
                <li>Open playground for Games &amp; sports.</li>
              </ul>

              <h4>Library</h4>
              <div align="center">
                <Button
                  href="https://www.mpsckp.com/pdf/book_list_2019_2020_1_8.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  Book List 2019-2020 (Class I to VIII)
                </Button>
                <Button
                  href="https://www.mpsckp.com/pdf/book_list_2019_2020_9_10.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  Book List 2019-2020 (Class IX to X)
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Facility;
