import React from 'react';
import { Outlet } from 'react-router-dom';
import './header.scss';

const Header = () => {
  return (
    <>
      <div className='header'>
          <img src="https://vansmx.vtexassets.com/assets/vtex/assets-builder/vansmx.store-theme/2.1.72/vans_logo___f0e76da56209d821e62c3835c1269ca8.svg" alt="" />
      </div>
      <Outlet />
    </>
  );
};

export default Header;