import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
export const ChangePassword = () => {
  return (
    <div>
      {' '}
      <Container style={{ backgroundColor: '#F8F8F8' }}>
        <Row className='text-center pt-5 my-5'>
          <div
            className=' m-auto mobw100 rounded-0 text border-bottom'
            style={{ width: '80%' }}
          >
            <p>Change Password</p>
          </div>
        </Row>
        <Row>
          <Col xl={12}>
            <div
              className=' m-auto mt-5 mobw100 rounded-0 '
              style={{ width: '80%' }}
            >
              <label className='mb-2'>Your Current Password</label>
              <input
                type='text'
                placeholder='*************'
                className='p-3 ps-5 rounded-5 border-0 bg-white w-100 shadow'
              />
              <img
                src='./lock.svg'
                alt='lock'
                style={{ transform: 'translateY(-45px) translateX(10px)' }}
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col xl={12}>
            <div
              className=' m-auto mt-3 mobw100 rounded-0 '
              style={{ width: '80%' }}
            >
              <label className='mb-2'>New Password</label>
              <input
                type='text'
                placeholder='*************'
                className='p-3 ps-5 rounded-5 border-0 bg-white w-100 shadow'
              />
              <img
                src='./lock.svg'
                alt='lock'
                style={{ transform: 'translateY(-45px) translateX(10px)' }}
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col xl={12}>
            <div
              className=' m-auto mt-3 mobw100 rounded-0 '
              style={{ width: '80%' }}
            >
              <label className='mb-2'>Confirm New Password</label>
              <input
                type='text'
                placeholder='*************'
                className='p-3 ps-5 rounded-5 border-0 bg-white w-100 shadow'
              />
              <img
                src='./lock.svg'
                alt='lock'
                style={{ transform: 'translateY(-45px) translateX(10px)' }}
              />
            </div>
          </Col>
        </Row>
        <Row className='d-flex justify-content-center  py-5'>
          <button
            className='border-0 w-25 rounded-5 text-white p-3 text-center'
            style={{ backgroundColor: '#FAB915' }}
          >
            Save Changes
          </button>
        </Row>
      </Container>
    </div>
  );
};
export default ChangePassword;
