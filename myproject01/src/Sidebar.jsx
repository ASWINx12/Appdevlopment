import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><Link to="/adminhome">Home</Link></li>
        <li><Link to="/contactus">Contact Us</Link></li>
        <li><Link to="/aboutus">About Us</Link></li>
        <li><Link to="/login">Logout</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
