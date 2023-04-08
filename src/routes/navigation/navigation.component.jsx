import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/header/header.component';

const Navigation = () => {
  return (
    <>
      <Header />
      <div className=' p-4'>
        <Outlet />
      </div>
    </>
  );
};

export default Navigation;
