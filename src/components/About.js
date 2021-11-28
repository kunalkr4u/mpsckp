import React from "react";
import { Container, Row, Col, Breadcrumb, Button } from "react-bootstrap";
const About = () => {
  return (
    <div className="inner-body">
      <Container fluid>
        <Row className="inner">
          <div className="inner-head">
            <Col>
              <h2>About Us</h2>
              <Breadcrumb>
                <Breadcrumb.Item href="../">
                  <i className="fa fa-home"></i> Home
                </Breadcrumb.Item>
                <Breadcrumb.Item active>About Us</Breadcrumb.Item>
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
                <strong>Madhusudan Public School (MPS)</strong>&nbsp; has been
                started from 1<sup>st</sup> April 2009 to cater quality English
                education in order to meet the needs of the fast changing 21
                <sup>st</sup> century world.
              </p>
              <p>
                <strong>
                  The school is affiliated to CBSE, New Delhi. The Affiliation
                  No. is 3430268
                </strong>
                &nbsp; and &nbsp;<strong>School No. is 58037.</strong>&nbsp;
              </p>
              <p>
                <strong>Madhusudan Public School</strong>&nbsp; popularly known
                as &nbsp;<strong>MPS</strong>&nbsp; which has come a long way in
                nurturing young minds since its inception. Its impressive jouney
                started in 2009 with the ambience for a ground breaking
                education system. The school provides various facilities like
                &nbsp;
                <strong>
                  VAST PLAYGROUND, DIGITAL CLASS, COMPUTER LAB, SCIENCE LAB
                </strong>
                &nbsp; and other separrate &nbsp;<strong>LABS</strong>&nbsp; for
                various subjects, spacious and well staked &nbsp;
                <strong>LIBRARY</strong>&nbsp;. School follows 100 percent
                child-centered approach with emphasis on Continuous &amp;
                Comprehensive Evaluation system implemented by C.B.S.E.
                Participation in the co-scholastic activities has range from
                &nbsp;
                <strong>YOGA, KARATE, ART &amp; CARFT, MUSIC, DANCE</strong>
                &nbsp; etc. are an integral part of the learning system.
              </p>
              <p>
                The school is a co-educational English medium and strictly
                follows &nbsp;
                <strong>CCE guidelines provided by CBSE, New Delhi</strong>
                &nbsp;. Our School holds a motto - &nbsp;
                <strong>" MOTIVATE PERSONAL STRENGTH "</strong>&nbsp; to provide
                the students all sorts of opportunities for achieving all-round
                and harmonious development.
              </p>
              <p>
                <strong>MPS</strong>&nbsp; is situated at Asantalia 4 km away
                from &nbsp;<strong>Railway Station Chakradharpur</strong>&nbsp;
                in west direction linked with &nbsp;
                <strong>Chakradharpur - Ranchi Main Road NH-75 (E)</strong>
                &nbsp;. It is nearly 5 minutes drive to reach &nbsp;
                <strong>MPS</strong>&nbsp; which is nearby &nbsp;
                <strong>
                  SDO Office, Porahat, Chakradharpur, W. Singhbhum, Jharkhand
                </strong>
                &nbsp; .
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="bg-orange">
        <Container>
          <Row>
            <Col>
              <h4>School Information</h4>
              <p className="text-center">
                Mandetory Disclosure guided by AICTE, New Delhi
              </p>
              <div align="center">
                <Button href="/SchoolInformation">School Information</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="bg-white">
        <Container>
          <Row>
            <Col>
              <h4>Vision &amp; Mission</h4>
              <p>
                We believe that education is not only the information but also
                the life building, character making, assimilation of ideas,
                which helps in the personality developement of a child.
              </p>
              <ul>
                <li>
                  Our focus to education is in accordance with the changing
                  needs of time.
                </li>
                <li>
                  We focus on the all round development of the student rather
                  than to give only academic excellence.
                </li>
                <li>
                  The school takes up different programmes which inculcate a
                  sense of discipline.
                </li>
                <li>
                  Adaptability for simple living and high thinking, respect for
                  our age old culture and heritage.
                </li>
                <li>
                  The school would like its student to become dynamic and
                  constructive citizen of the country and good human being.
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="mib">
        <Container>
          <Row>
            <Col>
              <h4>Our Logo</h4>
              <p>
                The school holds the motto &nbsp;
                <strong>“Motivate Personal Strength”</strong>&nbsp;. MPS is
                epitomizing all that you have ever dreamt for your little one.
                The school cared out of its fertile innovative way of thinking
                laced with its outstanding foresight heralds the dawn of a new,
                beginning of academic organization. The foremost mission of the
                school is depicted in the logo and we aim to impart training in
                life-skills deftly combining it with academic nurturing in a
                cultural ambience. Here at MPS the students are being groomed to
                have an overall development of their personalities.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
