import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './trust.css';
export const Trusted = () => {
  return (
    <div >
      <Container>
        <Row className='gradient'>
          <Col md={4}>
            <Row>
              <img src='./girl image.png' alt='girl' className='w-25' />
            </Row>
            <Row>
              <img
                src='https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=1972&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                className='w-25'
                style={{
                  borderRadius: '50%',
                  objectFit: 'cover',
                  width: '80px',
                  height: '80px',
                }}
                alt='girl'
              />
            </Row>
            <Row>
              <img src='./person.png' alt='person' className='w-25' />
            </Row>
          </Col>
          <Col md={4}>
            <Row>
              <h3>Trusted by Agencies & Store Owners</h3>
            </Row>
            <Row>
              <div className='bg-white shadow'>
                <p style={{ color: '#FAB915' }}>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum."
                </p>
              </div>
            </Row>
            <Row className='text-end'>
              <div className='d-flex'>
                <img src='./small arrow.svg' alt='arrow' />
                <img src='./large arrow.svg' alt='arrow' />
              </div>
              <div></div>
            </Row>
          </Col>
          <Col md={4}></Col>
        </Row>
      </Container>
    </div>
  );
};
export default Trusted;
