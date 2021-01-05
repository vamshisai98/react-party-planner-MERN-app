import React from 'react';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='logo'>
        <h1>
          <i className='fas fa-glass-cheers' />
          Party Planner
        </h1>
        <p></p>
      </div>
      <ul>
        <li>Hello, Vamshi</li>
        <span className='sm-hide'>|</span>
        <li>
          <a href='#!'>
            <span className='sm-hide'>Logout</span>
            <i className='fas fa-sign-out-alt'></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
