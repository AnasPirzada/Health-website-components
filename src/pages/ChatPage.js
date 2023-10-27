import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export const ChatPage = () => {
  return (
    <div>
      <Container>
        <Row className='bg-white'>
          <Col>
            <div className='d-flex text-black'>
              <p className='my-0'>All Message</p>
              <img
                src='./Path 32622.svg'
                width='10'
                className='ms-4'
                alt='drop down menu'
              />
            </div>
          </Col>

          <Col>
            <img src='' alt='pan button' />
          </Col>
          <Col>
            <div>
              <p>G</p>
            </div>
            <p>Anas P.</p>
            <small>Last seen 1 hour ago</small>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>Person Name</p>
          </Col>
        </Row>
        <Row>
          <p>Message</p>
        </Row>
      </Container>
    </div>
  );
};
export default ChatPage;
