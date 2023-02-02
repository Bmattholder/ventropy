import './App.css';
import { useState } from 'react';
import Register from './pages/Register';
import PassState from './pages/PassState';

function App() {
  const [passState, setPassState] = useState('');

  return (
    <div className='App'>
      <Register passState={setPassState} /> <br /> <br />
      <PassState setPassState={passState} />
    </div>
  );
}

export default App;
