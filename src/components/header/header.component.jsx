import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

const Header = () => {
  return (
    <header className=' bg-gray-800 p-6 flex justify-between items-center shadow mb-2 text-gray-50'>
      <Link className='logo-container' to='/'>
        <div className='logo'>
          <CrwnLogo />
        </div>
      </Link>

      <div className='navigation-links flex grow flex-row-reverse gap-12 pr-16'>
        <Link className='nav-link' to='/authorization'>
          SIGN IN
        </Link>

        <Link className='nav-link' to='/shop'>
          SHOP
        </Link>
      </div>

      <div className='clothing-cart'>Cart</div>
    </header>
  );
};

export default Header;
