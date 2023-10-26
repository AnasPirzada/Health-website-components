import React from 'react';

export const RequestCard = () => {
  return (
    <div className='shadow d-flex justify-content-center align-items-center my-4 rounded-4 '>
      <div>
        <img
          src='https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=1972&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          className='w-100 mt-4'
          style={{
            borderRadius: '50%',
            objectFit: 'cover',
            width: '100px',
            height: '100px',
          }}
          alt='girl'
        />
        <h3 className='mt-3 text'>Sophia</h3>
        <p className='text-black '>(Open Practice)</p>
      </div>
    </div>
  );
};
export default RequestCard;
