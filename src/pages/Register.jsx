import { useState } from 'react';

function Register({ passState, onStateChange }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { name, email, password, confirmPassword } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onStateChange({ name: name });
  };

  return (
    <>
      <section>
        <h1>Register Component</h1>
      </section>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          name='name'
          id='name'
          value={name}
          onChange={onChange}
          placeholder='Name'
        />
        <input
          type='email'
          name='email'
          id='email'
          value={email}
          onChange={onChange}
          placeholder='Email'
        />
        <input
          type='password'
          name='password'
          id='password'
          value={password}
          onChange={onChange}
          placeholder='Password'
        />
        <input
          type='password'
          name='confirmPassword'
          id='confirmPassword'
          value={confirmPassword}
          onChange={onChange}
          placeholder='Confirm Password'
        />
        <button type='submit'>Submit</button>
      </form>
    </>
  );
}

export default Register;
