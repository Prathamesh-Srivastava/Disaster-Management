import React from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <span className='logo'>
        <span>Disaster</span>
        <span>Management</span>
      </span>
      <ul className="nav-list">
        <Link to="/"><li><a href="#" className="nav-link">Home</a></li></Link>
        <li><a href="#" className="nav-link">About</a></li>
        <li><a href="#" className="nav-link"><a href='https://indianredcross.org/ircs/donatenow'>Donate</a></a></li>
        <Link to= "/volunteer"><li><a href="#" className="nav-link">Volunteer</a></li></Link>
        <li><a href="#" className="nav-link">Contact</a></li>
        <li><a href="#" className="nav-link">Admin</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
