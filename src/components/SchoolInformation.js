import React from "react";
import { Container, Row, Col, Breadcrumb, Table } from "react-bootstrap";
const SchoolInformation = () => {
  return (
    <div className="inner-body">
      <Container fluid>
        <Row className="inner">
          <div className="inner-head">
            <Col>
              <h2>School Information</h2>
              <Breadcrumb>
                <Breadcrumb.Item href="../">
                  <i className="fa fa-home"></i> Home
                </Breadcrumb.Item>
                <Breadcrumb.Item active>School Information</Breadcrumb.Item>
              </Breadcrumb>
            </Col>
          </div>
        </Row>
      </Container>
      <div className="mib">
        <Container>
          <Row>
            <Col>
              <div className="overflow-auto">
                <Table striped bordered hover>
                  <tr>
                    <th>S.N.</th>
                    <th>Particulars </th>
                    <th>Information </th>
                  </tr>
                  <tr>
                    <td rowSpan={4}>
                      <strong>1.</strong>
                    </td>
                    <td>
                      <strong>Name of the School with Address</strong>:
                      (strictly) as per Affiliation sanction letter or as
                      permitted by the Board) with PIN code no.
                    </td>
                    <td>
                      <strong>Madhusudan Public School</strong>,<br />
                      Vill : Asantalia, P.O.: Chakradharpur, West Singhbhum,
                      Jharkhand – 833102
                    </td>
                  </tr>
                  <tr>
                    <td>E-mail</td>
                    <td>
                      <a href="mailto:mpsckp@gmail.com">mpsckp@gmail.com</a>
                    </td>
                  </tr>
                  <tr>
                    <td>Phone No.</td>
                    <td>09955475737, 09934534059 </td>
                  </tr>
                  <tr>
                    <td>Fax No.</td>
                    <td>--- </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>2.</strong>
                    </td>
                    <td>
                      <strong>Year of establishment of school</strong>
                    </td>
                    <td>2009 </td>
                  </tr>
                  <tr>
                    <td rowSpan={3}>
                      <strong>3.</strong>
                    </td>
                    <td>
                      <strong>
                        Whether NOC from State/UT or recommendation of Embassy
                        of India obtained?
                      </strong>
                    </td>
                    <td>Yes </td>
                  </tr>
                  <tr>
                    <td>NOC No.</td>
                    <td>
                      12/<strong>&#2309;</strong>/6/2011/1154
                    </td>
                  </tr>
                  <tr>
                    <td>NOC issuing date</td>
                    <td>16/07/2011 </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>4.</strong>
                    </td>
                    <td>
                      <strong>
                        Is the school is recognized, if yes by which Authority
                      </strong>
                    </td>
                    <td>CBSE, NEW DELHI </td>
                  </tr>
                  <tr>
                    <td rowSpan={4}>
                      <strong>5.</strong>
                    </td>
                    <td>
                      <strong>Status of affiliation</strong>:
                      Permanent/Regular/Provisional
                    </td>
                    <td>Provisional </td>
                  </tr>
                  <tr>
                    <td>Affiliation No.</td>
                    <td>3430268 </td>
                  </tr>
                  <tr>
                    <td>Affiliation with the Board since</td>
                    <td>01.04.2012 </td>
                  </tr>
                  <tr>
                    <td>Extension of affiliation up to</td>
                    <td>31.03.2023</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>6.</strong>
                    </td>
                    <td>
                      <strong>
                        Name of Trust/Society/Company Registered under section
                        25 of the Company Act, 1956. Period up to which
                        Registration of Trust/Society is valid
                      </strong>
                    </td>
                    <td>Saraswati Devi Memorial Educational Trust </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>7.</strong>
                    </td>
                    <td>
                      <strong>
                        List of members of School Managing Committee with their
                        Address/tenure and post held
                      </strong>
                    </td>
                    <td>
                      <a
                        href="https://www.mpsckp.com/school/pdf/mgmt.pdf"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Click here for more details
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td rowSpan={4}>
                      <strong>8.</strong>
                    </td>
                    <td>
                      <strong>
                        Name and official address of the
                        Manager/President/Chairman/Correspondent
                      </strong>
                    </td>
                    <td>
                      Mr. Shyam Sundar Mahato
                      <br />
                      Asantalia, Chakradharpur Jharkhand – 833102
                    </td>
                  </tr>
                  <tr>
                    <td>E – mail</td>
                    <td>
                      <a href="mailto:mpsckp@gmail.com">mpsckp@gmail.com</a>
                    </td>
                  </tr>
                  <tr>
                    <td>Phone No.</td>
                    <td>09934395499 </td>
                  </tr>
                  <tr>
                    <td>Fax No.</td>
                    <td>--- </td>
                  </tr>
                  <tr>
                    <td rowSpan={12}>
                      <strong>9.</strong>
                    </td>
                    <td>
                      <strong>Area of school campus:</strong>
                    </td>
                    <td>&nbsp; </td>
                  </tr>
                  <tr>
                    <td>In Acres</td>
                    <td>2 Acres, </td>
                  </tr>
                  <tr>
                    <td>Is Sq. mtrs.</td>
                    <td>8093.7128 sq. mtrs </td>
                  </tr>
                  <tr>
                    <td>Built up area(sq. mtrs)</td>
                    <td>803.1467 sq. mtrs </td>
                  </tr>
                  <tr>
                    <td>Area of Playground in sq. mtrs</td>
                    <td>6651 sq. mtrs</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Other Facilities</strong>
                    </td>
                    <td>&nbsp; </td>
                  </tr>
                  <tr>
                    <td>Swimming Pool</td>
                    <td>No </td>
                  </tr>
                  <tr>
                    <td>Indoor games</td>
                    <td>Yes </td>
                  </tr>
                  <tr>
                    <td>Dance Rooms</td>
                    <td>Yes </td>
                  </tr>
                  <tr>
                    <td>Gymnasium</td>
                    <td>No </td>
                  </tr>
                  <tr>
                    <td>Music Rooms</td>
                    <td>Yes </td>
                  </tr>
                  <tr>
                    <td>Health and Medical Check up</td>
                    <td>Yes </td>
                  </tr>
                  <tr>
                    <td rowSpan={6}>
                      <strong>10.</strong>
                    </td>
                    <td>
                      <strong>Details of fee structure</strong>
                    </td>
                    <td>&nbsp; </td>
                  </tr>
                  <tr>
                    <td>Pre- Nursery</td>
                    <td>N/A </td>
                  </tr>
                  <tr>
                    <td>Nursery</td>
                    <td>N/A </td>
                  </tr>
                  <tr>
                    <td>I to V</td>
                    <td>Rs. 1300/ month </td>
                  </tr>
                  <tr>
                    <td>VI to VIII</td>
                    <td>Rs. 1400/ month </td>
                  </tr>
                  <tr>
                    <td>IX to X</td>
                    <td>Rs. 1500/month </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>11.</strong>
                    </td>
                    <td>
                      <strong>Transport facility </strong>
                    </td>
                    <td>Yes </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>12.</strong>
                    </td>
                    <td>
                      <strong>
                        Particulars of teaching staff (to be updated time to
                        time)
                      </strong>
                    </td>
                    <td>
                      <a
                        href="https://www.mpsckp.com/school/pdf/mps_faculty_2021.pdf"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Click here for more details
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>13.</strong>
                    </td>
                    <td>
                      <strong>
                        Details of salary being paid by the school to teaching
                        staff/ non-teaching staff (to be updated time to time)
                      </strong>
                    </td>
                    <td>
                      <a href="/">Click here for more details</a>
                    </td>
                  </tr>
                  <tr>
                    <td rowSpan={5}>
                      <strong>14.</strong>
                    </td>
                    <td>
                      <strong>Mode of payment of salary</strong>
                    </td>
                    <td>&nbsp; </td>
                  </tr>
                  <tr>
                    <td>Name of the Bank through which salary is drawing </td>
                    <td>HDFC BANK LTD. Chakradharpur</td>
                  </tr>
                  <tr>
                    <td>Through single cheque transfer advice</td>
                    <td>Yes </td>
                  </tr>
                  <tr>
                    <td>Individual cheque</td>
                    <td>NO </td>
                  </tr>
                  <tr>
                    <td>Cash</td>
                    <td>NO </td>
                  </tr>
                  <tr>
                    <td rowSpan={6}>
                      <strong>15.</strong>
                    </td>
                    <td>
                      <strong>Library facilities:</strong>
                    </td>
                    <td>&nbsp; </td>
                  </tr>
                  <tr>
                    <td>Size of the library in sq. feet</td>
                    <td>46&rsquo;x20&rsquo; </td>
                  </tr>
                  <tr>
                    <td>No. of Periodicals</td>
                    <td>8 </td>
                  </tr>
                  <tr>
                    <td>No. of Dailies</td>
                    <td>8 </td>
                  </tr>
                  <tr>
                    <td>No. of Reference books class-wise</td>
                    <td>2704 </td>
                  </tr>
                  <tr>
                    <td>No. of Magazine</td>
                    <td>10 </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>16.</strong>
                    </td>
                    <td>
                      <strong>
                        Name of the Grievance/redressal Officer with E-mail,{" "}
                        <br />
                        Ph. No., Fax No.
                      </strong>
                    </td>
                    <td>
                      Mr. K. Nagaraju (Principal)
                      <br />
                      <a href="mailto:knagarajuprincipal@gmail.com">
                        knagarajuprincipal@gmail.com
                      </a>
                      <br />
                      Mobile No.: <a href="tel:9934534059">09934534059</a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>17.</strong>
                    </td>
                    <td>
                      <strong>Members of Sexual Harassment Committee </strong>
                    </td>
                    <td>
                      1.Mrs. Arti Korwar (Vice-Principal)
                      <br />
                      2. Mrs. M. Sunita (PRT)
                      <br />
                      3. Saiyka Nigar (PRT)
                    </td>
                  </tr>
                  <tr>
                    <td rowSpan={2}>
                      <strong>18.</strong>
                    </td>
                    <td>
                      <strong>
                        Section wise enrolment of school for the current session
                      </strong>
                    </td>
                    <td>&nbsp; </td>
                  </tr>
                  <tr>
                    <td>Class Section Wise Total Student </td>
                    <td>
                      &nbsp;{" "}
                      <a href="st_details.php">Click here for more details</a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>19.</strong>
                    </td>
                    <td>
                      <strong>Academic session period</strong>
                    </td>
                    <td>
                      From 1<sup>st</sup> April to 31<sup>st</sup> March{" "}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>20.</strong>
                    </td>
                    <td>
                      <strong>Vacation period </strong>
                    </td>
                    <td>From May to June </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>21.</strong>
                    </td>
                    <td>
                      <strong>Admission period</strong>
                    </td>
                    <td>
                      From 1<sup>st</sup> April to 30<sup>th</sup> April{" "}
                    </td>
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

export default SchoolInformation;
