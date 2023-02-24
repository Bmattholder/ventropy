import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateToken, updateName } from '../features/auth/authSlice';

function Home() {
  const name = useSelector((state) => state.token.name);
  const tokenString = useSelector((state) => state.token.token);

  const dispatch = useDispatch();

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      try {
        const parsedToken = JSON.parse(storedToken);
        dispatch(updateToken(parsedToken));
      } catch (error) {
        console.log(error);
      }
    }
    const storedName = localStorage.getItem('name');
    if (storedName) {
      dispatch(updateName(storedName));
    }
  }, [dispatch]);

  let tokenValue;
  let shortenedToken = 'No token';
  if (tokenString && typeof tokenString === 'object' && tokenString.token) {
    tokenValue = tokenString.token;
    if (tokenValue) {
      shortenedToken = `${tokenValue.substring(0, 15)}...`;
    }
  }

  if (name === '') {
    return <h1>Welcome, please register</h1>;
  } else {
    return (
      <>
        <div className='heading'>Home</div>
        <h1>Welcome, {name}!</h1>
        <p>Token: {shortenedToken}</p>
      </>
    );
  }
}

export default Home;
