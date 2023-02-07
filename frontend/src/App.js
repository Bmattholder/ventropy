import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  const [state, setState] = useState({
    name: '',
  });

  const onStateChange = (newState) => {
    setState(newState);
  };

  return (
    <>
      <Router>
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home state={state} />} />
            <Route
              path='/register'
              element={<Register onStateChange={onStateChange} />}
            />
            <Route path='/login' element={<Login />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
