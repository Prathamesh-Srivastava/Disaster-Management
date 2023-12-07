import React from 'react';
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar">
      <span className='logo'>
        <span>Disaster</span>
        <span>Management</span>
      </span>
      <ul className="nav-list">
        <li><a href="#" className="nav-link">Home</a></li>
        <li><a href="#" className="nav-link">About</a></li>
        <li><a href="#" className="nav-link">Donate</a></li>
        <li><a href="#" className="nav-link">Volunteer</a></li>
        <li><a href="#" className="nav-link">Contact</a></li>
        <li><a href="#" className="nav-link">Admin</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
