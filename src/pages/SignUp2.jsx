import { useState } from 'react';

function SignUp2() {
  const [formData, whateverIWant] = useState({
    name: '',
    email: '',
    password: '',
    confirm: '',
  });

  const { name, email, password, confirm } = formData;

  const onChange = (e) => {
    whateverIWant((asshole) => ({
      ...asshole,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          name='name'
          id='name'
          value={name}
          placeholder='Name'
          onChange={onChange}
        />
        <input
          type='emai'
          name='email'
          id='email'
          value={email}
          placeholder='Email'
          onChange={onChange}
        />
        <input
          type='password'
          name='password'
          id='password'
          value={password}
          placeholder='Password'
          onChange={onChange}
        />
        <input
          type='password'
          name='confirm'
          id='confirm'
          value={confirm}
          placeholder='Confirm Password'
          onChange={onChange}
        />
        <button type='submit'>Submit</button>
      </form>

      {name.length >= 4 ? <h1>Sup, {name} </h1> : <></>}
    </>
  );
}

export default SignUp2;
