import React from 'react';

const Navbar = ({ toggleTheme }) => {
  return (
    <nav className='navbar flex justify-start items-center px-8 shadow-lg'>
      <h3 className='nav-heading mr-auto'>Where in the world?</h3>
      <button className='flex items-center' onClick={toggleTheme}>
        <ion-icon name='moon'></ion-icon>
        <span className='ml-2'>Light Mode</span>
      </button>
    </nav>
  );
};

export default Navbar;
