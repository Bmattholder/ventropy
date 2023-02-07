import React from 'react';
import { useState } from 'react';
import Header from '../components/Header';

function Login() {
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });

  const { email, password } = login;

  const onSubmit = (e) => {
    e.preventDefault();

    console.log(login);
  };

  const onChange = (e) => {
    setLogin((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
		<Header />
      <section className='heading'>
        <h1>Login</h1>
      </section>
      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <input
              type='email'
              id='email'
              name='email'
              value={email}
              placeholder='Email'
              onChange={onChange}
              className='form-control'
							required
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              id='password'
              name='password'
              value={password}
              placeholder='Password'
              onChange={onChange}
              className='form-control'
							required
            />
          </div>
					<button className="btn btn-block">Login</button>
        </form>
      </section>
    </>
  );
}

export default Login;
