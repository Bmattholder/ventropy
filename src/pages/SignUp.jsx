import { useState } from 'react';

function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const { name, email, password, passwordConfirm } = formData;

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== passwordConfirm) {
      alert('Try again, dumbass');
      return;
    }

    console.log(formData);
  };

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          id='name'
          name='name'
          placeholder='Name'
          value={name}
          onChange={onChange}
        />
        <input
          type='email'
          id='email'
          name='email'
          placeholder='Email'
          value={email}
          onChange={onChange}
        />
        <input
          type='password'
          id='password'
          name='password'
          placeholder='Password'
          value={password}
          onChange={onChange}
        />
        <input
          type='password'
          id='passwordConfirm'
          name='passwordConfirm'
          placeholder='Confirm Password'
          value={passwordConfirm}
          onChange={onChange}
        />
        <button>Your mom</button>
      </form>

      {name.length >= 4 ? <h1>Hello, {name}</h1> : <></>}
    </>
  );
}

export default SignUp;
