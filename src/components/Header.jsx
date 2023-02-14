import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
	return (
		<div className='header'>
			<div className="logo">
				<Link to='/'>Home</Link>
			</div>
			<ul>
				<li>
					<Link to='/register'>Register</Link>
				</li>
			</ul>
		</div>
	)
}

export default Header