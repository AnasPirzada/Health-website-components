import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import RequestCard from '../components/RequestCard.js';
export const Request = () => {
  return (
    <div>
      <Container className='shadow m-auto ' style={{ width: '80' }}>
        <Row className='m-auto ' style={{ width: '80%' }}>
          <h5 className='text'>Your Pending Request</h5>
        </Row>
        <Row className='m-auto mt-2' style={{ width: '80%' }}>
          <Col md={4} xs={12}>
            <RequestCard />
          </Col>
          <Col md={4} xs={12}>
            <RequestCard />
          </Col>
          <Col md={4} xs={12}>
            <RequestCard />
          </Col>
          <Col md={4} xs={12}>
            <RequestCard />
          </Col>
          <Col md={4} xs={12}>
            <RequestCard />
          </Col>
          <Col md={4} xs={12}>
            <RequestCard />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Request;
