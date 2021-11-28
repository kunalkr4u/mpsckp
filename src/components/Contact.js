import React from "react";
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
import Iframe from "react-iframe";
import "./Contact.css";
const Contact = () => {
  return (
    <div>
      <Container fluid>
        <Row className="inner">
          <div className="inner-head">
            <Col>
              <h2>Contact Us</h2>
              <Breadcrumb>
                <Breadcrumb.Item href="../">
                  <i className="fa fa-home"></i> Home
                </Breadcrumb.Item>
                <Breadcrumb.Item active>Contact Us</Breadcrumb.Item>
              </Breadcrumb>
            </Col>
          </div>
        </Row>
      </Container>
      <div className="mib">
        <Container>
          <Row>
            <Col md={5}>
              <div className="cbox effect2">
                <i className="fa fa-envelope"></i> <strong>Address:</strong>
                Asantalia, Chakradharpur,
                <br />
                W. Singhbum, Jharkhand
                <br />
                India - 833102
              </div>
              <div className="cbox effect2">
                <i className="fa fa-envelope-o"></i>&nbsp;
                <strong>Email: </strong>
                <a href="mailto:mpsckp@gmail.com">mpsckp@gmail.com</a>
              </div>
              <div className="cbox effect2">
                <i className="fa fa-globe"></i>&nbsp;
                <strong>Website:</strong>
                <a href="http://www.mpsckp.com" target="_blank" rel="noreferrer">www.mpsckp.com</a>
              </div>
              <div className="cbox effect2">
                <p><i className="fa fa-mobile-phone"></i>&nbsp;
                <strong>Mobile:</strong>
                <a href="tel:9931546305">+91 - 9931546305</a></p>
                <p>
                <i className="fa fa-whatsapp"></i>&nbsp;
                <strong>Whatsapp:</strong>
                <a href="tel:9931546305">+91 - 9931546305</a></p>
              </div>
            </Col>
            <Col md={7}>
              <Iframe
                url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.945613804791!2d85.59965371541965!3d22.693068434255864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f57882f386a813%3A0xaf918fa0f051fd92!2sMadhusudhan%20Public%20School!5e0!3m2!1sen!2sin!4v1621280801049!5m2!1sen!2sin"
                width="100%"
                height="410px"
                id="myId"
                className="myClassname"
                display="initial"
                position="relative"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Contact;
