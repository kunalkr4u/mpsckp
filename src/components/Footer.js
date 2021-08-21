import React from 'react';
import {Container,Row,Col,Tooltip,OverlayTrigger} from 'react-bootstrap';
import Iframe from 'react-iframe';
import {useState,useEffect} from 'react'
import axios from 'axios'
let home="/home";

const Footer=()=>{
    //creating IP state
  const [ip, setIP] = useState('');
    //creating function to load ip address from the API
    const getData = async () => {
      const res = await axios.get('https://geolocation-db.com/json/')
      console.log(res.data);
      setIP(res.data.IPv4)
    }

  
  useEffect( () => {
    //passing getData method to the lifecycle method
    getData();

  }, [])
    return(
            <Container fluid>
                <Row className="footer">
                    <Col md={3}>
                        <h4>OFFICIAL ADDRESS</h4>
                        <p>
                            <i className="fa fa-envelope"></i> <strong>Address: </strong> Asantalia, Chakradharpur,<br/>W. Singhbum, Jharkhand<br/>India - 833102
                        </p>
                        <p>
                            <i className="fa fa-envelope-o"></i> &nbsp;
                             <strong>Email: </strong> <a href="mailto:mpsckp@gmail.com"> mpsckp@gmail.com</a>
                        </p>
                        <p>
                            <i className="fa fa-globe"></i>  &nbsp;
                             <strong>Website: </strong> <a href="http://www.mpsckp.com"> www.mpsckp.com</a>
                        </p>
                        <p>
                            <i className="fa fa-mobile-phone"></i>  &nbsp;
                             <strong>Mobile: </strong> <a href="tel:9931546305"> +91 - 9931546305</a>
                        </p>
                        <p>
                            <i className="fa fa-whatsapp"></i>  &nbsp;
                             <strong>Whatsapp: </strong> <a href="tel:9931546305"> +91 - 9931546305</a>
                        </p>
                    </Col>
                    <Col md={3}>
                    <h4>MADHUSUDAN</h4>
                        <div className="fmenu">
                            <ul>
                                <li><a href="index.php"><i className="fa fa-hand-o-right"></i> Home</a></li>
                                <li><a href="about_us.php"><i className="fa fa-hand-o-right"></i> About Us</a></li>
                                <li><a href="academic.php"><i className="fa fa-hand-o-right"></i> Academic</a></li>
                                <li><a href="admission.php"><i className="fa fa-hand-o-right"></i> Admission</a></li>
                                <li><a href="facility.php"><i className="fa fa-hand-o-right"></i> Facility</a></li>
                                <li><a href="result.php"><i className="fa fa-hand-o-right"></i> Result</a></li>
                                <li><a href="gallery.php"><i className="fa fa-hand-o-right"></i> Gallery</a></li>
                                <li><a href="vacancy.php"><i className="fa fa-hand-o-right"></i> Vacancy</a></li> 
                                <li><a href="contact_us.php"><i className="fa fa-hand-o-right"></i> Contact</a></li>
                                <li><a href="privacy.php"><i className="fa fa-hand-o-right"></i> Privacy Policy</a></li>
                            </ul>
                        </div>
                    </Col>
                    <Col md={3} className="visitor">
                        <h4>Visitor Details</h4>
                        <div>
                            <p>Your IP Address is {ip}</p>
                        </div>
                            <div className="social">
                                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Facebook</Tooltip>}>
                                    <span className="d-inline-block">
                                        <a href={home}><i className="fa fa-facebook" ></i> </a>
                                    </span>
                                </OverlayTrigger>
                                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">YouTube</Tooltip>}>
                                    <span className="d-inline-block">
                                        <a href={home}><i className="fa fa-youtube" ></i> </a>
                                    </span>
                                </OverlayTrigger>
                                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Linkedin</Tooltip>}>
                                    <span className="d-inline-block">
                                        <a href={home}><i className="fa fa-linkedin" ></i> </a>
                                    </span>
                                </OverlayTrigger>
                                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Twitter</Tooltip>}>
                                    <span className="d-inline-block">
                                        <a href={home}><i className="fa fa-twitter" ></i> </a>
                                    </span>
                                </OverlayTrigger>
                            </div>
                    </Col>
                    <Col md={3}>
                    <h4>How to Reach</h4>
                            <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.945613804791!2d85.59965371541965!3d22.693068434255864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f57882f386a813%3A0xaf918fa0f051fd92!2sMadhusudhan%20Public%20School!5e0!3m2!1sen!2sin!4v1621280801049!5m2!1sen!2sin"
                                    width="100%"
                                    height="300px"
                                    id="myId"
                                    className="myClassname"
                                    display="initial"
                                    position="relative"/>
                    </Col>
                </Row>
            </Container>
    );
}
export default Footer;