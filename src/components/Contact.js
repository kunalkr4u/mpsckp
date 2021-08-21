import React from 'react';
import {Container,Row,Col,Breadcrumb} from 'react-bootstrap';
const Contact=()=>{
    return(
        <Container fluid>
            <Row className="inner">
                <Col>
                    <h2>Contact Us</h2>
                    <Breadcrumb className="nav justify-content-center">
                        <Breadcrumb.Item href="../"><i className="fa fa-home"></i> Home</Breadcrumb.Item>
                        <Breadcrumb.Item active>Contact Us</Breadcrumb.Item>
                    </Breadcrumb>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                        <p>
                            <i className="fa fa-envelope"></i> <strong>Address:</strong> Asantalia, Chakradharpur,<br/>W. Singhbum, Jharkhand<br/>India - 833102
                        </p>
                        <p>
                            <i className="fa fa-envelope-o"></i>  
                            <strong>Email: </strong> <a href="mailto:mpsckp@gmail.com">mpsckp@gmail.com</a>
                        </p>
                        <p>
                            <i className="fa fa-globe"></i>  
                            <strong>Website:</strong> <a href="http://www.mpsckp.com">www.mpsckp.com</a>
                        </p>
                        <p>
                            <i className="fa fa-mobile-phone"></i>  
                            <strong>Mobile:</strong> <a href="tel:9931546305">+91 - 9931546305</a>
                        </p>
                        <p>
                            <i className="fa fa-whatsapp"></i>  
                            <strong>Whatsapp:</strong> <a href="tel:9931546305">+91 - 9931546305</a>
                        </p>
                </Col>
                <Col md={6}>
                        <p>
                            <i className="fa fa-envelope"></i> <strong>Address:</strong> Asantalia, Chakradharpur,<br/>W. Singhbum, Jharkhand<br/>India - 833102
                        </p>
                        <p>
                            <i className="fa fa-envelope-o"></i>  
                            <strong>Email: </strong> <a href="mailto:mpsckp@gmail.com">mpsckp@gmail.com</a>
                        </p>
                        <p>
                            <i className="fa fa-globe"></i>  
                            <strong>Website:</strong> <a href="http://www.mpsckp.com">www.mpsckp.com</a>
                        </p>
                        <p>
                            <i className="fa fa-mobile-phone"></i>  
                            <strong>Mobile:</strong> <a href="tel:9931546305">+91 - 9931546305</a>
                        </p>
                        <p>
                            <i className="fa fa-whatsapp"></i>  
                            <strong>Whatsapp:</strong> <a href="tel:9931546305">+91 - 9931546305</a>
                        </p>
                </Col>
            </Row>
            
		</Container>
    );
}

export default Contact;