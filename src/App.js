import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
// import Counter from './features/counter/Counter';
import Home from './pages/Home'
import Register from './pages/Register'

function App() {
  return (
    <div className="container">
      <Router>
      <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/register' element={<Register />}/>
        </Routes>
      </Router>
      {/* <Counter /> */}
    </div>
  );
}

export default App;
