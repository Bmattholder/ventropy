import { useState } from 'react';

function Register({  onStateChange }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  });

  const { name, email, password, passwordConfirmation } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== passwordConfirmation) {
      alert("Passwords don't match...");
      // return;
    }

    onStateChange({ name: name, email: email });
    console.log(formData);
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
              className='form-control'
              id='name'
              name='name'
              value={name}
              onChange={onChange}
              placeholder='UrMomGay'
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='email'
              className='form-control'
              id='email'
              name='email'
              value={email}
              onChange={onChange}
              placeholder='noU'
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              id='password'
              name='password'
              minLength={4}
              value={password}
              onChange={onChange}
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              id='passwordConfirmation'
              name='passwordConfirmation'
              value={passwordConfirmation}
              onChange={onChange}
              required
            />
          </div>
          <div className='form-group'>
            <button className='btn btn-block'>Submit</button>
          </div>
        </form>
      </section>
      {password.length >= 4 ? (
        <h1>Your password is: {password} ...lol</h1>
      ) : (
        <></>
      )}
    </>
  );
}

export default Register;
