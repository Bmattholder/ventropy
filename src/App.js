import './App.css';
import { useState } from 'react';
import PassState from './pages/PassState';
import Register from './pages/Register';

function App() {
  const [muhName, setMuhName] = useState({
    name: '',
  });

  const handleStateChange = (newState) => {
    setMuhName(newState);
  };

  return (
    <div className='App'>
      <Register muhName={muhName} onStateChange={handleStateChange} />
      {muhName.name !== '' ? <PassState muhName={muhName} /> : <></>}
    </div>
  );
}

export default App;
