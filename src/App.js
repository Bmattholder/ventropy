import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Register from './pages/Register';

function App() {
  const [passName, setPassName] = useState({
    name: '',
  });

  const onStateChange = (newState) => {
    setPassName(newState);
  };

  return (
    <>
      <Router>
        <div className='container'>
          <Header />
          <Routes>
            <Route path='/' element={<Home passName={passName} />} />
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
