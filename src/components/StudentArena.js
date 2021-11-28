import React from "react";
import { Container, Row, Col, Breadcrumb, Table } from "react-bootstrap";
import "./StudentArena.css";
const StudentArena = () => {
  return (
    <div className="inner-body">
      <Container fluid>
        <Row className="inner">
          <div className="inner-head">
            <Col>
              <h2>Student Arena</h2>
              <Breadcrumb>
                <Breadcrumb.Item href="../">
                  <i className="fa fa-home"></i> Home
                </Breadcrumb.Item>
                <Breadcrumb.Item active>Student Arena</Breadcrumb.Item>
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
                To ensure healthy and constructive competition among the
                students and to develop team spirit the students are divided
                under four group:
              </p>
              <div className="circlearea">
                <div className="circle">Alfa</div>
                <div className="circle">Bravo</div>
                <div className="circle">Chetak</div>
                <div className="circle">Delta</div>
              </div>

              <div className="satable">
                <Table>
                  <tr>
                    <th colspan="4">Head Boy &amp; Girl for Session 2019-20</th>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="https://www.mpsckp.com/images/2019hb.jpg"
                        alt="Head Boy"
                      />
                    </td>
                    <td>
                      <img
                        src="https://www.mpsckp.com/images/2019hg.jpg"
                        alt="Head Girl"
                      />
                    </td>
                    <td>
                      <img
                        src="https://www.mpsckp.com/images/2019vhb.jpg"
                        alt="Vice Head Boy"
                      />
                    </td>
                    <td>
                      <img
                        src="https://www.mpsckp.com/images/2019vhg.jpg"
                        alt="Vice Head Girl"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>KARIM BANRA</td>
                    <td>SUSHMA MURMU</td>
                    <td>RAKESH PRADHAN</td>
                    <td>HIMANGI MAHTO</td>
                  </tr>
                  <tr>
                    <td>Head Boy</td>
                    <td>Head Girl</td>
                    <td>Vice Head Boy</td>
                    <td>Vice Head Girl</td>
                  </tr>
                </Table>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default StudentArena;
