import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

import Home from './pages/Home';
import Header from './components/Header';
import Register from './pages/Register';

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
          <Header />
          <Routes>
            <Route path='/' element={<Home state={state} />} />
            <Route
              path='/register'
              element={<Register onStateChange={onStateChange} />}
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
