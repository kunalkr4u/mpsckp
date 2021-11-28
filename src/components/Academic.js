import React from "react";
import { Container, Row, Col, Breadcrumb, Table } from "react-bootstrap";
const Academic = () => {
  return (
    <div className="inner-body">
      <Container fluid>
        <Row className="inner">
          <div className="inner-head">
            <Col>
              <h2>Academic</h2>
              <Breadcrumb>
                <Breadcrumb.Item href="../">
                  <i className="fa fa-home"></i> Home
                </Breadcrumb.Item>
                <Breadcrumb.Item active>Academic</Breadcrumb.Item>
              </Breadcrumb>
            </Col>
          </div>
        </Row>
      </Container>
      <div className="mib">
        <Container>
          <Row>
            <Col>
              <h4>Syllabus</h4>
              <p>
                Defined as the mostprogressive syllabus in India, we follow the
                academic structure dedicated by the{" "}
                <strong>
                  Centeral Board of Secondary Education (C. B.S.E.)
                </strong>
                .
              </p>
              <p>
                <span>
                  <strong>
                    The Session starts from April 1<sup>st</sup> week and ends
                    on March.
                  </strong>
                </span>
              </p>

              <p>
                continuous and comprehensive evaluation is a process to provide
                holistic profile of the Lerner through regular assessment of
                both scholastic and co-Scholastic aspects of development over
                the total span of learning time.
              </p>
              <p>
                It provides several opportunities for the school to identify the
                talent of the learners in different domains.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="bg-orange">
        <Container>
          <Row>
            <Col>
              <h4>Co-Curricular activities</h4>
              <p>
                The school organises a wide varieties of co-curricular
                activities for all students. Participation in{" "}
                <strong>CCA</strong> is compulsory for every student for their
                overall development.
              </p>
              <p>The Co-curricular Activities are as follows:</p>
              <p>
                <strong>Nursery to K.G.</strong> : Rhyms, Drawing, Writing,
                Games, Folk Dance, Story, Narration etc.
              </p>
              <p>
                <strong>Std. I to V</strong> : Essay, Speech, Writing, Drawing,
                Games, Public Speaking, Art and Craft etc.
              </p>
              <p>
                <strong>Std. VI to X</strong> : Debate, Quiz, Essay, Speech,
                Games, Survey, Dramatics, Art and Craft, Rangoli, Clay Modeling
                etc.
              </p>

              <Table striped bordered hover>
                <tr>
                  <th colSpan={4}>Literary &amp; Creative skill</th>
                </tr>
                <tr>
                  <td>Debate</td>
                  <td>Declamation(Elocution)</td>
                  <td>Creative Writing</td>
                  <td>Recitation</td>
                </tr>
                <tr>
                  <td>Drawing</td>
                  <td>Poster – Making</td>
                  <td>Slogan Writing</td>
                  <td>On the Spot Painting</td>
                </tr>
                <tr>
                  <td>Theatre</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <th colSpan={4}>Scientific Skills</th>
                </tr>
                <tr>
                  <td>Science Club</td>
                  <td>Projects</td>
                  <td>Maths Club</td>
                  <td>Science Quiz</td>
                </tr>
                <tr>
                  <td>Science Exhibition</td>
                  <td>Olympiads</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <th colSpan={4}>Aesthetic skills (Art &amp; Craft)</th>
                </tr>
                <tr>
                  <td>Music (Vocal, Instrumental)</td>
                  <td>Dance</td>
                  <td>Drama</td>
                  <td>Craft</td>
                </tr>
              </Table>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Academic;
