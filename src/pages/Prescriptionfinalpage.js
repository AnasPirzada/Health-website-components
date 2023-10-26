import { useState, useRef, useEffect } from 'react';
import { Col, Container, Row, Modal } from 'react-bootstrap';

export const Prescriptionfinalpage = () => {
  const datePickerRef = useRef(null);

  const openDatePicker = () => {
    datePickerRef.current.click();
  };

  const PatientDetails = [
    { placeholder: 'Sarah Johnson', label: 'Name', type: 'text' },
    { placeholder: '42 years old (Female)', label: 'Age' },
    { placeholder: '11/30/80', label: 'DOB', type: 'date' },
  ];

  const PatientDataDetail = [
    { placeholder: 'None', label: 'Past Medical Problems' },
    {
      placeholder: 'Birth Control pill',
      label: 'Current Medications',
    },
    { placeholder: 'None', label: 'Allergies' },

    {
      placeholder:
        'T: 98.0 deg F, BP: 122/68, HR: 72bpm,  W: 179 lbs / 81.2 kg, H: 67 in, BMI: 28.0',
      label: 'Vitals',
    },
  ];
  const MedicationRxDetail = [
    { placeholder: '#6489-641968', label: 'Invoice Number' },
    {
      placeholder: 'July 31, 2023',
      label: 'Invoice Date:',
    },
    { placeholder: 'July 31, 2023', label: 'Service Date' },

    {
      placeholder: '$25.00',
      label: 'Your Fees',
    },
    {
      placeholder: 'Pending',
      label: 'Status',
    },
    {
      placeholder: 'PA processing',
      label: 'Service Description',
    },
    {
      placeholder: 'None',
      label: 'Other Notes for your Documentation',
    },
  ];

  const [values, setValues] = useState(Array(PatientDetails.length).fill(''));

  const handleChange = (index, e) => {
    const updatedValues = [...values];
    updatedValues[index] = e.target.value;
    setValues(updatedValues);
  };
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h3 className='m-auto py-3' style={{ width: '75%' }}>
              Hi,Doctor
            </h3>
            <div
              className=' m-auto  shadow py-5 mobw100 rounded-0 '
              style={{ width: '80%' }}
            >
              <div className=' m-auto mobw100' style={{ width: '80%' }}>
                <h6 className='pb-4'>
                  <b style={{ color: '#FAB915' }}>Patient Detail</b>
                </h6>
              </div>

              <div>
                {PatientDetails.map((input, index) => (
                  <div
                    key={index}
                    className=' m-auto mobw90'
                    style={{ width: '80%' }}
                  >
                    <p className='mb-1 ms-3 mt-3 text-muted'>{input.label}</p>
                    <input
                      type={input.type}
                      className='shadow border-0 w-100 m-0 p-3 rounded-5 text-black'
                      placeholder={input.placeholder}
                      value={values[index]}
                      onChange={e => handleChange(index, e)}
                      style={{
                        '--placeholder-color': 'black',
                        'font-weight': 'normal',
                      }}
                    />
                  </div>
                ))}
                <div className=' m-auto' style={{ width: '80%' }}>
                  <button
                    className='btnn py-1 px-4 border-0 shadow rounded-5 mt-5  text-white'
                    style={{ backgroundColor: '#FAB915' }}
                  >
                    <span className='me-4'>Call Patient</span>
                    <img src='/Component 638 – 1.svg' width='30' height='30' />
                        
                  </button>
                </div>
              </div>
            </div>

            <br />
            <br />

            <div
              className=' m-auto  shadow py-5 mobw100 rounded-0 '
              style={{ width: '80%' }}
            >
              <div className=' m-auto' style={{ width: '80%' }}>
                <h6 className='pb-4'>
                  <b style={{ color: '#FAB915' }}>
                    Patient provided Data (7/31/23)
                  </b>
                </h6>
              </div>

              <div>
                {PatientDataDetail.map((input, index) => (
                  <div
                    key={index}
                    className=' m-auto mobw90'
                    style={{ width: '80%' }}
                  >
                    <p className='mb-1 ms-3 mt-3 ' style={{ color: '#747E93' }}>
                      {input.label}
                    </p>
                    <input
                      type={input.type}
                      className='shadow border-0  w-100 m-0 p-3 rounded-5 '
                      placeholder={input.placeholder}
                      value={values[index]}
                      onChange={e => handleChange(index, e)}
                    />
                  </div>
                ))}
              </div>

              <Row className=' m-auto mt-5' style={{ width: '80%' }}>
                <Col xs={12} lg={4} md={6} xl={4}>
                  <div
                    className='border-0 w-100 p-3 text-white rounded-3 mt-4 text-nowrap text-center'
                    style={{
                      backgroundColor: '#B6C5D1',
                    }}
                  >
                    <img
                      src='./Component 612 – 1.svg'
                      alt='icon'
                      className='me-3'
                    />
                    Write Prescription
                  </div>
                </Col>
                <Col xs={12} lg={4} md={6} xl={4}>
                  <div
                    className='border-0  w-100 p-3 text-white rounded-3 mt-4  text-center'
                    style={{ backgroundColor: '#B6C5D1' }}
                  >
                    <img
                      src='./Component 613 – 1.svg'
                      alt='icon'
                      className='me-3'
                    />
                    Create Invoice
                  </div>
                </Col>
                <Col xs={12} lg={4} md={12} xl={4}>
                  <div
                    className='border-0  w-100  p-3 text-white rounded-3 mt-4 text-center'
                    style={{ backgroundColor: '#B6C5D1' }}
                  >
                    <img
                      src='./Component 614 – 1.svg'
                      alt='icon'
                      className='me-3'
                    />
                    Order Lab Tests
                  </div>
                </Col>
              </Row>
            </div>

            <br />

            <div className='shadow my-4 m-auto p-4' style={{ width: '80%' }}>
              <Row className='d-flex justify-content-between align-items-center'>
                <Col xs={12} lg={4} md={6} xl={4}>
                  <div
                    className='p-5 shadow text-black bg-white d-flex justify-content-between align-items-center mt-4'
                    style={{ width: '100%' }}
                  >
                    <img src='./Component 615 – 1.svg' alt='Messages' />

                    <p className='my-0' style={{ fontSize: '14px' }}>
                      Messages
                    </p>
                    <img src='./Path 32622.svg' alt='Messages' />
                  </div>
                </Col>
                <Col xs={12} lg={4} md={6} xl={4}>
                  <div
                    className='p-5 shadow text-black bg-white mt-4  d-flex justify-content-between align-items-center text-nowrap'
                    style={{ width: '100%' }}
                  >
                    <img
                      src='./Component 615 – 1.svg'
                      alt='Add Progress Note'
                      className='me-2'
                    />

                    <p className='my-0' style={{ fontSize: '14px' }}>
                      Add Progress Note
                    </p>
                    <img
                      src='./Path 32622.svg'
                      alt='Add Progress Note'
                      className='ms-2'
                    />
                  </div>
                </Col>
                <Col xs={12} lg={4} md={12} xl={4}>
                  <div className='p-4 shadow text-black bg-white mt-4 w-100 text-center'>
                    <img
                      src='./Component 616 – 1.svg'
                      className='me-3'
                      alt='July 31, 2023'
                    />
                    July 31, 2023
                    <img
                      src='./Path 32622.svg'
                      className='ms-3'
                      alt='July 31, 2023'
                    />
                    <Row>
                      <p className='my-0'>- Invoice (#11326A675)</p>
                    </Row>
                    <Row>
                      <p className='my-0'>- Pending</p>
                    </Row>
                  </div>
                </Col>
              </Row>
            </div>

            <br />

            <div
              className=' m-auto  shadow py-5 mobw100 rounded-0 '
              style={{ width: '80%' }}
            >
              <div className='m-auto' style={{ width: '80%' }}>
                <p className='pb-4'>
                  <p className='my-0' style={{ color: '#FAB915' }}>
                    <img src='./Component 617 – 1.svg' className='me-3' />
                    Patient provided Data (7/31/23)
                    <img src='./Path 32622.svg' className='ms-3' />
                  </p>
                  <br />
                  -Medication Rx (#6489-641968)
                  <br />
                  -Approved
                </p>
              </div>

              <div>
                {MedicationRxDetail.map((input, index) => (
                  <div
                    key={index}
                    className=' m-auto mobw90'
                    style={{ width: '80%' }}
                  >
                    <p className='mb-1 ms-3 mt-3 ' style={{ color: '#747E93' }}>
                      {input.label}
                    </p>
                    <input
                      type={input.type}
                      className='shadow border-0  w-100 m-0 p-3 rounded-5 '
                      placeholder={input.placeholder}
                      value={values[index]}
                      onChange={e => handleChange(index, e)}
                    />
                  </div>
                ))}
              </div>

              <Row className=' m-auto mt-5' style={{ width: '80%' }}>
                <Col xs={12} lg={4} md={6} xl={4}>
                  <button
                    className='border-0 w-100 p-2 text-white rounded-5'
                    style={{
                      backgroundColor: '#FAB915',
                    }}
                  >
                    Cancel Invoice
                    <img src='/Component 638 – 1.svg' />
                  </button>
                </Col>
                <Col xs={12} lg={4} md={6} xl={4}>
                  <button
                    className='border-0 w-100 p-3 text-white rounded-5 mt-4 mt-md-0'
                    style={{
                      backgroundColor: '#EB5757',
                    }}
                  >
                    Resend Invoice
                    <img src='/Component 638 – 1.svg' />
                  </button>
                </Col>
              </Row>

              <Row className=' m-auto mt-4' style={{ width: '80%' }}>
                <p style={{ color: '#FAB915' }}>
                  Pharmacy
                  <br />
                </p>
                <p>135 Barclay Cir, Ste 103Rochester Hills, MI 48307</p>
              </Row>

              <Row className=' m-auto mt-4' style={{ width: '80%' }}>
                <Col xs={12} md={3}>
                  <button
                    className='border-0 py-1 px-3 text-white rounded-5'
                    style={{
                      backgroundColor: '#EB5757',
                      fontSize: '14px',
                      width: '170px',
                    }}
                  >
                    Change
                    <img
                      src='/Component 638 – 1.svg'
                      width='30'
                      height='30'
                      className='ms-3'
                    />
                  </button>
                </Col>
              </Row>

              <Row className=' m-auto mt-3' style={{ width: '80%' }}>
                <p className='my-0 text-black'>
                  e-Fax Status
                  <br />
                  Sent 7/31/2023 8:40pm to (214) 123-4567, Pending
                  <br />
                  Sending e-fax, Please refresh in 10 minutes for updated
                  status.
                  <br />
                </p>
              </Row>

              <Row className=' m-auto mt-5' style={{ width: '80%' }}>
                <Col xs={12} lg={4} md={6} xl={4}>
                  <button
                    className='border-0 w-100 p-2 text-white rounded-5'
                    style={{
                      backgroundColor: '#FAB915',
                    }}
                  >
                    Confirm Rx Called in
                    <img src='/Component 638 – 1.svg' />
                  </button>
                </Col>
                <Col xs={12} lg={4} md={6} xl={4}>
                  <button className='border-0 w-100 p-3 text-black rounded-5 bg-white shadow mt-4 mt-md-0'>
                    View Faxed Rx
                    <img src='./Component 618 – 1.svg' className='ms-3' />
                  </button>{' '}
                </Col>
              </Row>
            </div>

            <br />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Prescriptionfinalpage;
