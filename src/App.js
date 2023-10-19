import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    qualification: "",
  });

  const displayData = ({firstName, lastName, email, phoneNumber, qualification}) => {
    firstName = values.firstName;
    lastName = values.lastName;
    email = values.email;
    phoneNumber = values.phoneNumber;
    qualification = values.qualification;
    alert(`You Submitted: firstname - ${firstName} lastname - ${lastName} email - ${email} phone number - ${phoneNumber} qualification - ${qualification}`);
  }

  const handleFirstNameInputChange = (event) => {
    setValues({...values, firstName: event.target.value})
  }

  const handleLastNameInputChange = (event) => {
    setValues({...values, lastName: event.target.value})
  }

  const handleEmailInputChange = (event) => {
    setValues({...values, email: event.target.value})
  }

  const handlePhoneNumberInputChange = (event) => {
    setValues({...values, phoneNumber: event.target.value})
  }

  const handleQualificationInputChange = (event) => {
    setValues({...values, qualification: event.target.value})
  }

  return (
    <div className="App">
      <h2>Employee Registration Form</h2>
      <form className="register-form" id='form'>
          <input
          onChange={handleFirstNameInputChange}
          value={values.firstName}
          type='text'
            className="form-field"
            placeholder="First Name"
            name="firstName" /> <br></br>
            <input
            onChange={handleLastNameInputChange}
            value={values.lastName}
            type='text'
            className="form-field"
            placeholder="Last Name"
            name="lastName" /><br></br>
            <input
            onChange={handleEmailInputChange}
            value={values.email}
            type='text'
            className="form-field"
            placeholder="Email"
            name="email" /><br></br>
            <input
            onChange={handlePhoneNumberInputChange}
            value={values.phoneNumber}
            type="number"
            className="form-field"
            placeholder="Phone Number"
            name="phoneNumber" /><br></br>
            <input
            onChange={handleQualificationInputChange}
              value={values.qualification}
              type='text'
              className='form-field'
              placeholder='Degree'
              name='qualification'
            /><br></br>
            <button class="form-field" type="submit" onClick={displayData}>
              Submit
            </button>
      </form>
    </div>
  );
}

export default App;
