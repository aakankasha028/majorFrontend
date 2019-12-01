import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/all-tests'} className="nav-link">Tests</Link></li>
            <li><Link to={'/login-register'} className="nav-link">Login/Register</Link></li>
          </ul>
        </nav>
	);
}

export default Navbar;