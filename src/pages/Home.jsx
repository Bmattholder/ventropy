import React from 'react';

function Home({ state }) {
	const {name, token} = state
	const shortenedToken = (token.token + "").substring(0, 16) + "...";
  return (
    <>
      <h1>Hello, {name}</h1>
      <h2>Token: {shortenedToken}</h2>
    </>
  );
}

export default Home;
