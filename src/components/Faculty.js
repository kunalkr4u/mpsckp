import React from 'react';
import {Container,Row,Col,Breadcrumb} from 'react-bootstrap';
const Faculty=()=>{
    return(
        <Container>
            <Row className="inner">
                <div className='inner-head'>
                    <Col>
                        <h2>Faculty</h2>
                        <Breadcrumb>
                            <Breadcrumb.Item href="../"><i className="fa fa-home"></i> Home</Breadcrumb.Item>
                            <Breadcrumb.Item active>Faculty</Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                </div>
            </Row>
            <Row className='mpsdata'>

            </Row>
            <Row>
                <Col>
                    <div class="text-center">
                        <img src="https://www.mpsckp.com/images/faculty.jpg" alt="" className='img-responsive' />
                    </div>
                    
                    <p>MPS believes that no one exercises a greater influence upon the mind of the young person’s than a teacher. The teacher’s philosophy of life has an important bearing upon the life of the pupil/ students. Here a teacher when appointed in active service must have the basic knowledge of child psychology. The teacher must have an attraction and interest for the profession. MPS tries to provide its students the best, Well qualified, experienced and trained faculty. It helps them acquire the expertise and knowledge to become a successful student as well as a successful professional. What it demands in return is their total co-operation, participation, and enthusiasm. The faculty carefully choosen according to their specialties and credentials.</p>
                </Col>
            </Row>
            
		</Container>
    );
}

export default Faculty;