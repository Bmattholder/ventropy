import { useState } from 'react';
import Register from './pages/Register';
import PassState from './pages/PassState';

function App() {
  const [passState, setPassState] = useState({
    name: '',
  });

  const handleStateChange = (newState) => {
    setPassState(newState);
  };

  return (
    <div className='App'>
      <Register passState={passState} onStateChange={handleStateChange} />
      <br /> <br />
      <PassState passState={passState} />
    </div>
  );
}

export default App;
