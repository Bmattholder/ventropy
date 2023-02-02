import { useState } from 'react';

function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    urMomGay: '',
    noU: '',
  });

  const { name, email, urMomGay, noU } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (urMomGay !== noU) {
      alert('No uuu');
      return;
    }

    console.log(formData);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          name='name'
          id='name'
          placeHolder='Name'
          value={name}
          onChange={onChange}
          required
        />
        <input
          type='email'
          name='email'
          id='email'
          placeHolder='Email'
          value={email}
          onChange={onChange}
          required
        />
        <input
          type='password'
          name='urMomGay'
          id='urMomGay'
          placeHolder='Password'
          value={urMomGay}
          onChange={onChange}
          required
        />
        <input
          type='password'
          name='noU'
          id='noU'
          placeHolder='Confirm Password'
          value={noU}
          onChange={onChange}
          required
        />
        <button type='submit'>Submit</button>
      </form>

      {name.length >= 4 ? <h1>Hello, {name} </h1> : <></>}
    </>
  );
}

export default SignUp;
