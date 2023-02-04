import './App.css';
import { useState } from 'react';
import DisplayName from './components/DisplayName';
import Register from './pages/Register';
import DisplayEmail from './components/DisplayEmail';

function App() {
  const [updateData, setUpdateData] = useState({
    name: '',
    email: '',
  });

  const handleStateChange = (newState) => {
    setUpdateData(newState);
  };
  return (
    <>
      <Register  onStateChange={handleStateChange} />
      {updateData.name !== '' ? <DisplayName updateData={updateData} /> : <></> }
      {updateData.email !== '' ? <DisplayEmail updateData={updateData} /> : <></> }
    </>

  );
}

export default App;
