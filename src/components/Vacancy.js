import React from 'react';
import {Container,Row,Col,Breadcrumb} from 'react-bootstrap';
const Vacancy=()=>{
    return(
        <Container>
            <Row>
                <Col>
                    <h2>Join Us</h2>
                    <Breadcrumb>
                        <Breadcrumb.Item href="../"><i className="fa fa-home"></i> Home</Breadcrumb.Item>
                        <Breadcrumb.Item active>Join Us</Breadcrumb.Item>
                    </Breadcrumb>
                </Col>
            </Row>
            <Row>
                <Col>
                </Col>
            </Row>
            
		</Container>
    );
}

export default Vacancy;