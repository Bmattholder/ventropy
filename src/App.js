import './App.css';
import { useState } from 'react';
import Register from './pages/Register';
import Card from './components/Card';

function App() {
  const [cardName, setCardName] = useState({ name: '' });

  const handleStateChange = (newState) => {
    setCardName(newState)
  }

  return (
    <div className='App'>
      <Register handleStateChange={handleStateChange} />
      <Card cardName={cardName} />
    </div>
  );
}

export default App;
