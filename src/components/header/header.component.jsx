import React from 'react';

const Header = () => {
  return (
    <header className=' bg-cyan-100 p-6 flex justify-between shadow-md mb-2'>
      {/* LOGO */}
      <div className='logo'>Logo</div>

      {/* CLOTHING CART */}
      <div className='clothing-cart'>Cart</div>
    </header>
  );
};

export default Header;
