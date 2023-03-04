import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='header'>
      <div className='logo'>
        <Link to='/'>Home</Link>
      </div>
      <ul>
        <li>
          <Link to='/register'>Register</Link>
        </li>
        <li>
          <Link to='/weather-location'>Weather Location</Link>
        </li>
        <li>
          <Link to='/to-do'>To Do's</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
