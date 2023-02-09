import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register({ onStateChange }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { name, email, password, confirmPassword } = formData;

  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    } else {
      try {
        const response = await axios.post('http://localhost:8000/register', {
          name,
          email,
          password,
        });
        const token = response.data;
        console.log('token: ', token);
        onStateChange({ name: name });
        console.log(formData);
        navigate('/');
      } catch (error) {
        console.error(error);
      }
    }
  };

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <section className='heading'>
        <h1>Register</h1>
      </section>
      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <input
              type='text'
              id='name'
              name='name'
              className='form-control'
              placeholder='Enter Name'
              value={name}
              onChange={onChange}
              minLength={2}
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='email'
              id='email'
              name='email'
              className='form-control'
              placeholder='Enter Email'
              value={email}
              onChange={onChange}
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              id='password'
              name='password'
              className='form-control'
              placeholder='Enter Password'
              value={password}
              onChange={onChange}
              minLength={2}
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              id='confirmPassword'
              name='confirmPassword'
              className='form-control'
              placeholder='Confirm Password'
              value={confirmPassword}
              onChange={onChange}
              minLength={4}
              required
            />
          </div>

          <button className='btn btn-block'>Submit</button>
        </form>
      </section>
    </>
  );
}

export default Register;
