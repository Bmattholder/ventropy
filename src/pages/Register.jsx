import { useState } from 'react';

function Register({handleStateChange}) {
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
      return;
    } else {
      console.log(formData);
			handleStateChange({name: name})
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
              className='form-control'
              id='name'
              name='name'
              value={name}
              onChange={onChange}
              placeholder='Name'
              minLength={2}
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='email'
              placeholder='Email'
              className='form-control'
              id='email'
              name='email'
              value={email}
              onChange={onChange}
              minLength={2}
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              placeholder='Password'
              className='form-control'
              id='password'
              name='password'
              value={password}
              onChange={onChange}
              minLength={2}
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              placeholder='Confirm Password'
              className='form-control'
              id='passwordConfirm'
              name='passwordConfirm'
              value={passwordConfirm}
              onChange={onChange}
              minLength={2}
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
