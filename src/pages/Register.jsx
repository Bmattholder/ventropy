import { useState } from 'react';

function Register({ onStateChange }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const { name, email, password, passwordConfirm } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      alert("Passwords don't match");
    } else {
      onStateChange({name: name});
      console.log(formData);
    }
  };

  return (
    <>
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
