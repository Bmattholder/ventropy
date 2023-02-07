import React from 'react';
import Header from '../components/Header';

function Home({ state }) {
  return (
    <>
      <Header />
      <h1> Welcome Home {state.name}</h1>
    </>
  );
}

export default Home;
