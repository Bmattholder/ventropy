import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login({ onStateChange }) {
  const [ loginFormData, setLoginFormData ] = useState({
    email: '',
    password: '',
  });

  const {name, email, password} = loginFormData;

  const navigate = useNavigate();

  const onChange = (e) => {
    setLoginFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (password.length < 3) {
      alert("Password isn't long enough");
      return;
    } else {
      try {
        const response = await axios.post('http://localhost:8000/register', {
          name,
          email,
          password,
        });
        let token = response.data;
        console.log('token: ', token);
				localStorage.setItem('token', token);
        onStateChange({ name: name, token: token });
        console.log(loginFormData);
        navigate('/account');
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <section className='heading'>
        <h1>Login</h1>
      </section>
      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <input
              type='email'
              className='form-control'
              id='email'
							name='email'
							value={email}
              onChange={onChange}
							placeholder='Enter your email'
							required
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              id='password'
							name='password'
							value={password}
              onChange={onChange}
							minLength={4}
							placeholder='Enter your password'
							required
            />
          </div>
          <button className='btn btn-block'>Submit</button>
        </form>
      </section>
    </>
  );
}

export default Login;
