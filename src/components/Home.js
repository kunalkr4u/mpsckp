import React from 'react';
import {Carousel,Container,Row,Col} from 'react-bootstrap';
import GetNotice from './GetNotice';
import Iframe from 'react-iframe';
import './Home.css'
const Home=()=>{
    return(
        <Container fluid>
        <Row>
            
                <Carousel fade>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="http://mpsckp.com/images/slide1.webp"
                            alt="First slide"
                            />
                            <Carousel.Caption>
                            <h3> </h3>
                            <p></p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="http://mpsckp.com/images/slide1.webp"
                            alt="Second slide"
                            />

                            <Carousel.Caption>
                            <h3> </h3>
                            <p></p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="http://mpsckp.com/images/slide1.webp"
                            alt="Third slide"
                            />

                            <Carousel.Caption>
                            <h3> </h3>
                            <p></p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="http://mpsckp.com/images/slide1.webp"
                            alt="Fourth slide"
                            />

                            <Carousel.Caption>
                            <h3> </h3>
                            <p></p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="http://mpsckp.com/images/slide1.webp"
                            alt="Fifth slide"
                            />

                            <Carousel.Caption>
                            <h3> </h3>
                            <p></p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        </Carousel>
           
        </Row>
        <Row className="boxarea">
                <Col md={4}>
                    <div className="notice">
                        <h3><i className="fa fa-clock-o"></i> Notice</h3>
                        <div className="noticedata">
                            <GetNotice />
                        </div>
                    </div>
                </Col>
                <Col md={8}>
                    <Row>
                        <Col md={4}>
                            <a href="./about">
                            <div className="box">
                                <i className="fa fa-sticky-note fa-3x" aria-hidden="true"></i>
                                <h4>Mission</h4>
                                <h5>Statement</h5>
                            </div>
                            </a>
                        </Col>
                        <Col md={4}>
                            <a href="http://www.mpsckp.com/pdf/annual_report_2019.pdf" target="_blank" rel="noreferrer">
                            <div className="box">
                                <i className="fa fa-leanpub fa-3x" aria-hidden="true"></i>
                                <h4>Annual</h4>
                                <h5>Report</h5>
                            </div>
                            </a>
                        </Col>
                        <Col md={4}>
                            <a href="http://www.mpsckp.com/pdf/oasis_2020.pdf" target="_blank" rel="noreferrer">
                            <div className="box">
                                <i className="fa fa-book fa-3x" aria-hidden="true"></i>
                                <h4>OASIS</h4>
                                <h5>Final Report</h5>
                            </div>
                            </a>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4}>
                            <a href="https://www.mpsckp.com/download_tc.php" target="_blank" rel="noreferrer">
                            <div className="box">
                                <i className="fa fa-file-pdf-o fa-3x" aria-hidden="true"></i>
                                <h4>TC/SLC</h4>
                                <h5>Download</h5>
                            </div>
                            </a>
                        </Col>
                        <Col md={4}>
                            <a href="/SchoolInformation">
                            <div className="box">
                                <i className="fa fa-building fa-3x" aria-hidden="true"></i>
                                <h4>School</h4>
                                <h5>Information</h5>
                            </div>
                            </a>
                        </Col>
                        <Col md={4}>
                            <a href="/StudentArena">
                            <div className="box">
                                <i className="fa fa-users fa-3x" aria-hidden="true"></i>
                                <h4>Student</h4>
                                <h5>Arena</h5>
                            </div>
                            </a>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className="about">
                <Col>
                    <Row>
                        <Col>
                            <h3><i className="fa fa-building" aria-hidden="true"></i> The School</h3>
                        </Col>
                    </Row>
                    <Row >
                        <Col md={6}>
                            <Iframe url="http://www.youtube.com/embed/mztJbcr-ZPw"
                                width="100%"
                                height="450px"
                                id="myId"
                                className="myClassname"
                                display="initial"
                                position="relative"/>
                        </Col>
                        <Col md={6}>
                            <p><b>Madhusudan Public School (MPS)</b> has been started from 1<sup>st</sup> April 2009 to cater quality English education in order to meet the needs of the fast changing 21<sup>st</sup> century world.</p>
                            <p>The school is affiliated to <b>CBSE, New Delhi</b>. The Affiliation No. is <b>3430268</b> and School No. is <span>58037</span>.</p>
                            <p><b>Madhusudan Public School</b> popularly known as <b>MPS</b> which has come a long way in nurturing young minds since its inception. Its impressive jouney started in 2009 with the ambience for a ground breaking education system. The school provides various facilities like <strong>VAST PLAYGROUND, DIGITAL CLASS, COMPUTER LAB, SCIENCE LAB</strong> and other separrate <strong>LAB</strong> for various subjects, spacious and well staked <strong>LIBRARY</strong>. School follows 100 percent child-centered approach with emphasis on Continuous & Comprehensive Evaluation system implemented by C.B.S.E. Participation in the co-scholastic activities has range from <strong>YOGA, KARATE, ART & CARFT, MUSIC, DANCE</strong> etc. are an integral part of the learning system.</p>
                            <p>The school is a co-educational English medium and strictly follows <strong>CCE guidelines provided by CBSE, New Delhi</strong>. Our School holds a motto - <strong>" MOTIVATE PERSONAL STRENGTH "</strong> to provide the students all sorts of opportunities for achieving all-round and harmonious development.</p>
                            <p><strong>MPS</strong> is situated at Asantalia 4 kms away from <strong>Railway Station Chakradharpur</strong> in west direction linked with <strong>Chakradharpur - Ranchi Main Road NH-75 (E)</strong>. It is nearly 5 minutes drive to reach <strong>MPS</strong> which is nearby <strong>SDO Office, Porahat, Chakradharpur, W. Singhbhum, Jharkhand</strong>.</p>
                        </Col>
                    </Row>
                </Col>

            </Row>
            <Row className="mps">
                <Col md={4}>
                    <a href="https://www.mpsckp.com/pdf/oasis_2020.pdf">
                    <div className="mpsbox">
                        <img src="https://www.mpsckp.com/gallery/school/images/8.jpg" alt="Motivate" className="img-fluid" />
                        <div className="mpsboxtxt">
                            <h3>Motivate</h3>
                        </div>
                    </div>
                    </a>
                </Col>
                <Col md={4}>
                    <div className="mpsbox">
                        <img src="https://www.mpsckp.com/gallery/school/images/8.jpg" alt="Motivate" className="img-fluid" />
                        <div className="mpsboxtxt">
                            <h3>Personal</h3>
                        </div>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="mpsbox">
                        <img src="https://www.mpsckp.com/gallery/school/images/8.jpg" alt="Motivate" className="img-fluid" />
                        <div className="mpsboxtxt">
                            <h3>Strength</h3>
                        </div>
                    </div>
                </Col>
            </Row>
            
        </Container>
       
    );
}

export default Home;