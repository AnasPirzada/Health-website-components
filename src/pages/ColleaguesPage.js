import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
export const ColleaguesPage = () => {
  return (
    <div>
      <Container>
        <div className='m-auto' style={{ width: '80%' }}>
          <Row className='mt-5'>
            <h4 className='text-black '>Colleagues</h4>
          </Row>
          <Row className='shadow p-5'>
            <Col>
              <button
                className='border-0 p-4 w-100 text-white shadow d-flex justify-content-between align-items-center rounded-3 '
                style={{ backgroundColor: '#FAB915' }}
              >
                <img src='./Component 619 – 1.svg' alt='chat' />
                Colleague Messages
                <img
                  src='./Arrow - Right Circle.svg'
                  alt='drop down arrow'
                />
              </button>
            </Col>
            <Col>
              <button
                className='border-0 p-4 w-100 text-white shadow d-flex justify-content-between align-items-center rounded-3 '
                style={{ backgroundColor: '#FAB915' }}
              >
                <img src='./Component 620 – 1.svg' alt='drop down arrow' />
                Invite Colleague{' '}
                <img
                  src='./Arrow - Right Circle.svg'
                  alt='drop down arrow'
                />
              </button>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};
export default ColleaguesPage;
