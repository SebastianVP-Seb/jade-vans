import React from 'react';
import './header.scss';
import { HiOutlineShoppingBag, HiShoppingBag, HiOutlineMenuAlt1 } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const Header = () => {

  const state = useSelector((state: RootState)=>state.cart);
  return (
    <>
      <div className='header'>
        <HiOutlineMenuAlt1 className='icon-react' />
        <Link to='/'>
          <img src="https://vansmx.vtexassets.com/assets/vtex/assets-builder/vansmx.store-theme/2.1.72/vans_logo___f0e76da56209d821e62c3835c1269ca8.svg" alt="" />
        </Link>
        <Link to='cart' >
          {
            state.length>0 
              ? <HiShoppingBag className='icon-react' />
              : <HiOutlineShoppingBag className='icon-react' />
          }
        </Link>
      </div>
    </>
  );
};

export default Header;