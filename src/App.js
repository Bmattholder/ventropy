import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import TodoList from './components/ToDoList';
import WeatherLocation from './components/WeatherLocation';
import Home from './pages/Home';
import Register from './pages/Register';

function App() {
  return (
    <div className='container'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/weather-location' element={<WeatherLocation />} />
          <Route path='/to-do' element={<TodoList/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
