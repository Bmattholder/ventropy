import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Register from './pages/Register';

function App() {
  const [state, setState] = useState({ name: '', token: '' });

  const onStateChange = (newState) => {
    setState(newState);
  };

  return (
    <>
      <div className='container'>
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={<Home state={state} />} />
            <Route
              path='/register'
              element={<Register onStateChange={onStateChange} />}
            />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
