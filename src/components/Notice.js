import React from 'react';
import {Container,Row,Col,Breadcrumb} from 'react-bootstrap';
const Notice=()=>{
    return(
        <Container>
            <Row>
                <Col>
                    <h2>Notice</h2>
                    <Breadcrumb>
                        <Breadcrumb.Item href="../"><i className="fa fa-home"></i> Home</Breadcrumb.Item>
                        <Breadcrumb.Item active>Notice</Breadcrumb.Item>
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

export default Notice;