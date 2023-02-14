import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateToken, updateName } from '../features/token/tokenSlice';
import axios from 'axios';


function Register() {
  const [ formData, setFormData ] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { name, email, password, confirmPassword } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

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
        const handleTokenReceived = (token) => {
          dispatch(updateToken(token));
        };
				const handleName = (name) => {
					dispatch(updateName(name))
					localStorage.setItem('name', name);
				}
        handleTokenReceived(token);
        handleName(name);
				console.log('token: ', token);
        localStorage.setItem('token', JSON.stringify(token));
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
      <div className='form'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
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
              type='email'
              className='form-control'
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
              type='password'
              className='form-control'
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
              type='password'
              className='form-control'
              name='confirmPassword'
              id='confirmPassword'
              value={confirmPassword}
              onChange={onChange}
              placeholder='Confirm your password'
              minLength={4}
              required
            />
          </div>
          <button className='btn btn-block'>Submit</button>
        </form>

      </div>
    </>
  );
}

export default Register;
