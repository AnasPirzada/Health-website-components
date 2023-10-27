import { useState, useRef } from 'react';

import { Col, Container, Row } from 'react-bootstrap';

export const ProfilePage = () => {
  const [value, setValue] = useState(25);

  const hChange = event => {
    let newValue = parseInt(event.target.value);
    if (isNaN(newValue) || newValue < 0) {
      newValue = 0;
    }
    setValue(newValue);
  };

  const datePickerRef = useRef(null);

  const openDatePicker = () => {
    datePickerRef.current.click();
  };

  const PersonalInformation = [
    {
      placeholder: 'Sarah',
      label: 'First Name',
      type: 'text',
    },
    {
      placeholder: 'Johnson ',
      label: 'Last Name',
    },
    { placeholder: 'MD', label: 'Degree' },

    { placeholder: 'Texas ', label: 'Medical or Professional school' },
    { placeholder: 'UAMS', label: 'Residency' },
    { placeholder: 'FE/EM', label: 'Specialty' },
    { placeholder: '000 - 0000 - 0000', label: 'Phone' },
    {
      placeholder: 'E.g: Interests, Services provided',
      label: 'Other Information',
      type: 'textarea',
    },
  ];
  const ContactInformation = [
    {
      placeholder: '123 456 789',
      label: 'Phone Number',
      type: 'text',
    },
    {
      placeholder: '111 444 888 999',
      label: 'Fax Number',
    },
    { placeholder: 'Malik Health Care', label: 'Practice Name' },

    {
      placeholder: '123 West Walnut Street #1234',
      label: 'Practice Address (line1)',
    },
    { placeholder: 'England, Dewsbury', label: 'Practice Address (line2)' },
    { placeholder: 'City', label: 'Rogers' },
    { placeholder: 'Arkansas', label: 'State' },
    { placeholder: '75451', label: 'Zip Code' },
    { placeholder: '123@mail.com', label: 'Email' },
  ];
  const NpiNum = [
    {
      placeholder: '8425496084',
      label: 'NPI Number',
      type: 'number',
    },
  ];
  const [values, setValues] = useState(
    Array(PersonalInformation.length).fill('')
  );

  const handleChange = (index, e) => {
    const updatedValues = [...values];
    updatedValues[index] = e.target.value;
    setValues(updatedValues);
  };

  const [selected, setSelected] = useState();

  const handleSelectClick = index => {
    setSelected(prevSelected => {
      const newSelected = [...prevSelected];
      newSelected[index] = !newSelected[index];
      return newSelected;
    });
  };
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h3 className='m-auto py-3' style={{ width: '75%' }}>
              Profile
            </h3>
            <div
              className=' m-auto  shadow py-5 mobw100 rounded-0 '
              style={{ width: '80%' }}
            >
              <div className=' m-auto' style={{ width: '80%' }}>
                <h6 className='pb-4'>
                  <b style={{ color: '#FAB915' }}>Personal Information</b>
                </h6>
                <p className='my-0'>
                  Your Personal Information is what members of your MK Health
                  Care Practice see.
                </p>
                <Col xs={12} xl={3} lg={3} md={12}>
                  <div className='bg-body w-100 h-25 text-center shadow rounded-4 mt-4 p-5 '>
                    <img src='./Iconly-Bold-Profile.svg' alt='profile' />
                  </div>
                </Col>
                <Row>
                  <Col xs={12} xl={6} lg={6} md={12}>
                    <button
                      className='border-0 rounded-3 p-3 mt-4 text-white'
                      style={{ backgroundColor: '#EB5757', width: '100%' }}
                    >
                      <img
                        src='./Component 614 – 1.svg'
                        alt='icons'
                        className='me-3'
                      />
                      Change Profile Picture
                    </button>
                  </Col>
                  <Col xs={12} xl={6} lg={6} md={12}>
                    <button
                      className='text-white  border-0 rounded-3 p-3 mt-4 ms-0 ms-lg-3 '
                      style={{ backgroundColor: '#FAB915', width: '100%' }}
                    >
                      <img
                        src='./remove icon.svg'
                        alt='icons'
                        className='me-3'
                      />
                      Remove Your Photo
                    </button>
                  </Col>
                </Row>
              </div>
            </div>
            <br />
            <br />
            <div
              className=' m-auto  shadow py-5 mobw100 rounded-0 '
              style={{ width: '80%' }}
            >
              <div>
                {PersonalInformation.map((input, index) => (
                  <div
                    key={index}
                    className=' m-auto mobw90'
                    style={{ width: '80%' }}
                  >
                    <p className='mb-1 ms-3 mt-3 ' style={{ color: '#747E93' }}>
                      {input.label}
                    </p>
                    {input.type === 'textarea' ? (
                      <textarea
                        className='text-black shadow border-0 w-100 m-0 p-3 rounded-5'
                        placeholder={input.placeholder}
                        value={values[index]}
                        onChange={e => handleChange(index, e)}
                      />
                    ) : (
                      <input
                        type={input.type}
                        className='shadow border-0 w-100 m-0 p-3 rounded-5'
                        placeholder={input.placeholder}
                        value={values[index]}
                        onChange={e => handleChange(index, e)}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
            <br />
            <div
              className=' m-auto  shadow py-5 mobw100 rounded-0 '
              style={{ width: '80%' }}
            >
              <div className=' m-auto' style={{ width: '80%' }}>
                <h6 className='pb-4'>
                  <b style={{ color: '#FAB915' }}>
                    <img
                      src='./fee icon.svg'
                      alt='Professional Fee icon'
                      className='me-3'
                    />
                    Professional Fee (Default)
                  </b>
                </h6>
                <p className='my-0'>
                  Your default fee is displayed to patients when they are
                  requesting a service. You can change this fee at any time.
                </p>
              </div>
              <div className='m-auto' style={{ width: '80%' }}>
                <Col xs={12}>
                  <div
                    className='d-flex justify-content-start align-items-center mt-3'
                    style={{ width: '100%' }}
                  >
                    <div
                      className='text-center'
                      style={{
                        backgroundColor: '#DFE2E5',
                        width: '10%',
                        borderRadius: '15px 0 0 15px',
                        padding: '5px',
                      }}
                    >
                      <img src='./dolor sign.svg' alt='dollar' />
                    </div>
                    <input
                      type='number'
                      className='text-center'
                      placeholder='25'
                      value={value}
                      onChange={hChange}
                      style={{
                        width: '30%',
                        border: 'none',
                        borderBottom: '1px solid #fff',
                        padding: '5px',
                      }}
                    />
                    <div
                      className='text-center'
                      style={{
                        backgroundColor: '#DFE2E5',
                        width: '10%',
                        borderRadius: '0 15px 15px 0',
                        padding: '5px',
                      }}
                    >
                      .00
                    </div>
                  </div>
                </Col>

                <p className='my-0 mt-3'>
                  Most active providers charge more than 50$.
                </p>
                <div className='d-flex mt-2'>
                  <input type='checkbox' />
                  <p className='my-0 ms-4'>
                    I Pledge to donate my fees to charity.
                  </p>
                </div>
              </div>
            </div>
            <br />
            <div
              className=' m-auto  shadow py-5 mobw100 rounded-0 '
              style={{ width: '80%' }}
            >
              <div className=' m-auto' style={{ width: '80%' }}>
                <p style={{ color: '#FAB915' }}>Charity/ Cause</p>
                <p>
                  Mental health and short term memory loss condition, serious
                  addiction problems.{' '}
                </p>
              </div>
            </div>
            <br />
            <div
              className=' m-auto  shadow py-5 mobw100 rounded-0 '
              style={{ width: '80%' }}
            >
              <div className=' m-auto' style={{ width: '80%' }}>
                <p style={{ color: '#FAB915' }}>
                  Disbursement of Professional Fees
                </p>
                <p>
                  Professional fees are disbursed on a monthly cycle. For
                  example, fees earned in April are disbursed during the first
                  week of May. We use a third party service, Get Payment to
                  better manage the process, Get Payment collects your W9
                  information and provides the option to choose/change your
                  preferred payment method. Certain methods may incur additional
                  fees (e.g. Wire transfer)
                </p>
                <p>Add, Edit and View your disbursement info here</p>
              </div>
            </div>
            <br />
            <div
              className=' m-auto  shadow py-5 mobw100 rounded-0 '
              style={{ width: '80%' }}
            >
              <div className=' m-auto' style={{ width: '80%' }}>
                <p style={{ color: '#FAB915' }}>Contact Information</p>
                <p>
                  Your Phone Number and office address are provided to the
                  pharmacy for the purpose of contacting you if there are any
                  question about prescription you wrote. This Information is not
                  shared with your patients.
                </p>
              </div>
            </div>
            <br />
            <div
              className=' m-auto  shadow py-5 mobw100 rounded-0 '
              style={{ width: '80%' }}
            >
              <div>
                {ContactInformation.map((input, index) => (
                  <div
                    key={index}
                    className=' m-auto mobw90'
                    style={{ width: '80%' }}
                  >
                    <p className='mb-1 ms-3 mt-3 ' style={{ color: '#747E93' }}>
                      {input.label}
                    </p>
                    {input.type === 'textarea' ? (
                      <textarea
                        className='text-black shadow border-0 w-100 m-0 p-3 rounded-5'
                        placeholder={input.placeholder}
                        value={values[index]}
                        onChange={e => handleChange(index, e)}
                      />
                    ) : (
                      <input
                        type={input.type}
                        className='shadow border-0 w-100 m-0 p-3 rounded-5'
                        placeholder={input.placeholder}
                        value={values[index]}
                        onChange={e => handleChange(index, e)}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
            <br />
            <div
              className=' m-auto  shadow py-5 mobw100 rounded-0 '
              style={{ width: '80%' }}
            >
              <div className=' m-auto text-center ' style={{ width: '80%' }}>
                <Row>
                  <Col xs={12} xl={6} lg={6} md={6}>
                    <button
                      className='border-0 rounded-3 text-white text-center p-3'
                      style={{ backgroundColor: '#B6C5D1', width: '100%' }}
                    >
                      Change Email Address
                    </button>
                  </Col>
                  <Col xs={12} xl={6} lg={6} md={6}>
                    <button
                      className='border-0 ms-0 rounded-3 text-center p-3 text-white mt-4 mt-md-0 ms-lg-2 ms-md-2'
                      style={{ backgroundColor: '#B6C5D1', width: '100%' }}
                    >
                      Change Password
                    </button>
                  </Col>
                </Row>
              </div>
            </div>
            <br />
            <div
              className=' m-auto  shadow py-5 mobw100 rounded-0 '
              style={{ width: '80%' }}
            >
              <div className=' m-auto' style={{ width: '80%' }}>
                <p style={{ color: '#FAB915' }}>Email Preferences</p>
                <p>Notification Emails (e.g. New Request and New message):</p>
                <Row>
                  <Col xs={12} md={5} lg={4} xl={4}>
                    <button
                      className='border-0 rounded-5 text-white text-center p-3 mt-3 mt-md-2'
                      style={{ backgroundColor: '#FAB915', width: '100%' }}
                    >
                      All{' '}
                      <img
                        src='./whitearrows.svg'
                        alt='arrow'
                        className='ms-2'
                      />
                    </button>
                  </Col>
                  <Col xs={12} md={7} lg={4} xl={4}>
                    <button
                      className='border-0 rounded-5 text-white text-center p-3 ms-0 ms-lg-3 mt-3 mt-md-2'
                      style={{ backgroundColor: '#B6C5D1', width: '100%' }}
                    >
                      New Emails only{' '}
                      <img
                        src='./whitearrows.svg'
                        alt='arrow'
                        className='ms-2'
                      />
                    </button>
                  </Col>
                  <Col xs={12} md={12} lg={4} xl={4}>
                    <button
                      className='border-0 rounded-5 text-white text-center p-3  mt-3 mt-md-2 ms-0 ms-lg-3'
                      style={{ backgroundColor: '#B6C5D1', width: '100%' }}
                    >
                      Change to none{' '}
                      <img
                        src='./whitearrows.svg'
                        alt='arrow'
                        className='ms-2'
                      />
                    </button>
                  </Col>
                </Row>
                <p className='my-5'>
                  Confirmation Emails (e.g. RX sent, Invoice sent, Patient
                  accepted Rx):
                </p>
                <Row>
                  <Col xs={12} md={6} lg={4} xl={4}>
                    <button
                      className='border-0 rounded-5 text-white text-center p-3'
                      style={{ backgroundColor: '#FAB915', width: '100%' }}
                    >
                      All{' '}
                      <img
                        src='./whitearrows.svg'
                        alt='arrow'
                        className='ms-2'
                      />
                    </button>
                  </Col>
                  <Col xs={12} md={6} lg={4} xl={4}>
                    <button
                      className='border-0 rounded-5 text-white text-center p-3 ms-0 ms-md-2 ms-lg-2 mt-4 mt-md-0'
                      style={{ backgroundColor: '#B6C5D1', width: '100%' }}
                    >
                      None
                      <img
                        src='./whitearrows.svg'
                        alt='arrow'
                        className='ms-2'
                      />
                    </button>
                  </Col>
                </Row>
              </div>
            </div>
            <br />
            <div
              className=' m-auto  shadow py-5 mobw100 rounded-0 '
              style={{ width: '80%' }}
            >
              <div className=' m-auto' style={{ width: '80%' }}>
                <p style={{ color: '#FAB915' }}>License Information</p>
                <p>
                  Your License information is only shared with the pharmacy when
                  you write a prescription or with Quest Diagnostics when you
                  order lab tests.
                </p>
              </div>
              <div>
                {NpiNum.map((input, index) => (
                  <div
                    key={index}
                    className=' m-auto mobw90'
                    style={{ width: '80%' }}
                  >
                    <p className='mb-1 ms-3 mt-3 ' style={{ color: '#747E93' }}>
                      {input.label}
                    </p>
                    {input.type === 'textarea' ? (
                      <textarea
                        className='text-black shadow border-0 w-100 m-0 p-3 rounded-5'
                        placeholder={input.placeholder}
                        value={values[index]}
                        onChange={e => handleChange(index, e)}
                      />
                    ) : (
                      <input
                        type={input.type}
                        className='shadow border-0 w-100 m-0 p-3 rounded-5'
                        placeholder={input.placeholder}
                        value={values[index]}
                        onChange={e => handleChange(index, e)}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
            <br />
            <div
              className=' m-auto  shadow py-5 mobw100 rounded-0 '
              style={{ width: '80%' }}
            >
              <div className=' m-auto' style={{ width: '80%' }}>
                <table>
                  <thead>
                    <tr>
                      <th className='th-cell'>License</th>
                      <th className='th-cell'>Number</th>
                      <th className='th-cell'>Expires</th>
                      <th className='th-cell'>Image</th>
                      <th className='th-cell'>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>DEA</td>
                      <td>E-5941</td>
                      <td>2-2-23</td>
                      <td>No</td>
                      <td>Active</td>
                    </tr>
                  </tbody>
                </table>
                <Row>
                  <Col xs={12} md={8} lg={5} xl={5}>
                    <button
                      className='w-100 p-3 text-white rounded-5 border-0 mt-5'
                      style={{ backgroundColor: '#FAB915' }}
                    >
                      Edit Medical License
                      <img src='./whitearrows.svg' className='ms-3' />
                    </button>
                  </Col>
                </Row>
              </div>
            </div>
            <br />
            <br />
            <div
              className=' m-auto  shadow py-5 mobw100 rounded-0 '
              style={{ width: '80%' }}
            >
              <div className=' m-auto' style={{ width: '80%' }}>
                <p style={{ color: '#FAB915' }}>NPDB Self Query</p>
                <Row>
                  <Col xs={12} md={6} lg={5} xl={5}>
                    <button
                      className='w-100 p-3 text-white rounded-5 border-0 mt-5'
                      style={{ backgroundColor: '#FAB915' }}
                    >
                      Stored
                      <img src='./whitearrows.svg' className='ms-3' />
                    </button>
                  </Col>
                  <Col xs={12} md={6} lg={5} xl={5}>
                    <button
                      className='w-100 p-3 text-white rounded-5 border-0 mt-5 ms-0 ms-lg-3'
                      style={{ backgroundColor: '#B6C5D1' }}
                    >
                      Remove
                      <img src='./whitearrows.svg' className='ms-3' />
                    </button>
                  </Col>
                </Row>
              </div>
            </div>

            <br />

            <div
              className=' m-auto  shadow py-5 mobw100 rounded-0 '
              style={{ width: '80%' }}
            >
              <div className=' m-auto' style={{ width: '80%' }}>
                <p style={{ color: '#FAB915' }}>Verify Information</p>
                <p>Identity Trujillo: Verified</p>
              </div>
            </div>
            <br />
            <br />
            <div className=' m-auto   mobw100 ' style={{ width: '80%' }}>
              <div className=' m-auto' style={{ width: '80%' }}>
                <Row>
                  <Col xs={12} md={6} lg={5} xl={5}>
                    <button
                      className='w-100 rounded-3 p-3 text-white border-0'
                      style={{ backgroundColor: '#FAB915' }}
                    >
                      Save Changes
                    </button>
                  </Col>
                </Row>
              </div>
            </div>
            <br />
            <br />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default ProfilePage;
