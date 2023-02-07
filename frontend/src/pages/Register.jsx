import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header';

function Register({ onStateChange }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });
  const [error, setError] = useState(null);

  const { name, email, password, passwordConfirm } = formData;

  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      alert("Passwords don't match");
    } else {
      try {
        const response = await axios.post(
          'http://localhost:8000/register',
          { name, email, password }
        );
        const token = response.data.token;
        localStorage.setItem('token', token);
        console.log('token: ', token);

        onStateChange({ name: name });
        if (token) {
          navigate('/');
        }
      } catch (error) {
        setError(error.message);
        console.error(error);
        alert(error.message);
      }
    }
  };

  return (
    <>
      <Header />
      <section className='heading'>Register</section>
      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <input
              className='form-control'
              type='text'
              name='name'
              id='name'
              value={name}
              onChange={onChange}
              placeholder='Enter your name'
              minLength={2}
              required
            />
          </div>
          <div className='form-group'>
            <input
              className='form-control'
              type='email'
              name='email'
              id='email'
              value={email}
              onChange={onChange}
              placeholder='Enter your email'
              required
            />
          </div>
          <div className='form-group'>
            <input
              className='form-control'
              type='password'
              name='password'
              id='password'
              value={password}
              onChange={onChange}
              placeholder='Enter your password'
              minLength={4}
              required
            />
          </div>
          <div className='form-group'>
            <input
              className='form-control'
              type='password'
              name='passwordConfirm'
              id='passwordConfirm'
              value={passwordConfirm}
              onChange={onChange}
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
