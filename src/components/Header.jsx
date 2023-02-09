import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='header'>
      <div className='logo'>
        <Link to='/'>Home</Link>
      </div>
      <ul>
        <li>
          <Link to='/register'>Register</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
