import './App.css';
import Register from './pages/Register';
import { useState } from 'react';
import Home from './pages/Home';

function App() {
  const [state, setState] = useState({
    name: '',
  });

  const onStateChange = (newState) => {
    setState(newState);
  };

  return (
    <div className='App'>
      <Register onStateChange={onStateChange} />
      {state.name !== '' ? <Home state={state} /> : <></>}
    </div>
  );
}

export default App;
