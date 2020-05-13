import React from 'react';

const Navbar = ({ toggleTheme, theme }) => {
  return (
    <nav className='navbar flex justify-start items-center px-8 shadow-md'>
      <h3 className='nav-heading mr-auto'>Where in the world?</h3>
      <button className='flex items-center' onClick={toggleTheme}>
        {theme === 'dark' ? (
          <ion-icon name='sunny-outline'></ion-icon>
        ) : (
          <ion-icon name='moon'></ion-icon>
        )}
        <span className='ml-2'>{theme === 'dark' ? 'Light' : 'Dark'} Mode</span>
      </button>
    </nav>
  );
};

export default Navbar;
