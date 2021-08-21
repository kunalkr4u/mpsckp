import React from 'react';
import axios from 'axios';
import Moment from 'moment';
import {Container,Row,Col} from 'react-bootstrap';
//import moment from 'moment';
class GetNotice extends React.Component {
    state = {
      users: [],
      isLoading: true,
      errors: null
    };
  
    getNotices() {
      axios
        .get("http://mpsckp.com/noticedata.php")
        .then(response =>
          response.data.map(notice => ({
            title: `${notice.title}`,
            date: `${notice.date}`,
          }))
        )
        .then(data => {
          this.setState({
            data,
            isLoading: false
          });
        })
        .catch(error => this.setState({ error, isLoading: false }));
    }
  
    componentDidMount() {
      this.getNotices();
    }
  
    render() {
      const { isLoading, data } = this.state;
      Moment.locale('en');
      return (
        <React.Fragment>
          <div>
            {!isLoading ? (
              data.map(notice => {
                const { title,date } = notice;
                return (
                  <Container>
                    <Row className="noticerow" key={title}>
                    <Col md="auto">
                      <p className="calendar">{Moment(date).format('DD')}<em>{Moment(date).format('MMMM')}</em></p>
                    </Col>
                    <Col>
                      <p>{title}</p>
                    </Col>
                    <hr />
                  
                  </Row>
                  </Container>
                  
                );
              })
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </React.Fragment>
      );
    }
  }

export default GetNotice; 