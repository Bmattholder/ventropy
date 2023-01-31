import { useState } from 'react';

function SignUp() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    password2: '',
  });

  const { fullName, email, password, password2 } = formData;

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== password2) {
      alert("Passwords don't match");
    } else {
      console.log(formData)
      return(formData)
    }

    
  };

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <section className='heading'>
      </section>
      <section className='form'>
        <form onSubmit={onSubmit}>
          <h4>Create New User</h4> <br />
          <div className='form-group'>
            <input
              type='text'
              id='fullName'
              name='fullName'
              value={fullName}
              onChange={onChange}
              placeholder='Enter your name'
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='email'
              id='email'
              name='email'
              value={email}
              onChange={onChange}
              placeholder='Enter your email'
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              id='password'
              name='password'
              value={password}
              onChange={onChange}
              placeholder='Enter Password'
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              id='password2'
              name='password2'
              value={password2}
              onChange={onChange}
              placeholder='Confirm Password'
              required
            />
          </div>
          <button className="btn" type='submit'>Submit</button>
        </form>
      </section>

    <section className='form'>
    {fullName.length >= 4 ? <h1>Welcome, {fullName}</h1> : <span></span>}
    </section>
    </>
  );
}

export default SignUp;
