import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='header'>
        <Link to='/'>Home</Link>
      <ul>
        <li>
          <Link to='/register'>Register</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
