import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { name, email, password, confirmPassword } = formData;

  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    } else {
      try {
        console.log(formData);
        navigate('/');
      } catch (error) {
        console.log(error);
      }
    }
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
              value={name}
              onChange={onChange}
              className='form-control'
              placeholder='Enter your name'
              minLength={2}
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='email'
              id='email'
              name='email'
              value={email}
              onChange={onChange}
              className='form-control'
              placeholder='Enter your email'
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              id='password'
              name='password'
              value={password}
              onChange={onChange}
              className='form-control'
              placeholder='Enter your password'
              minLength={4}
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              id='confirmPassword'
              name='confirmPassword'
              value={confirmPassword}
              onChange={onChange}
              className='form-control'
              placeholder='Confirm your password'
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
