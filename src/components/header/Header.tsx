import React from 'react';
import { HiOutlineShoppingBag, HiShoppingBag, HiOutlineMenuAlt1 } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
// import './header.scss';

const Header = () => {

  const {cartItems} = useSelector((state: RootState)=>state.cart);
  console.log(cartItems)
  return (
    <>
      <div className='header' >
        <HiOutlineMenuAlt1 className='icon-react' />
        <Link to='/jade-vans'>
          <img src="https://vansmx.vtexassets.com/assets/vtex/assets-builder/vansmx.store-theme/2.1.72/vans_logo___f0e76da56209d821e62c3835c1269ca8.svg" alt="" />
        </Link>
        <div className='header_bag'>
          <Link to='/jade-vans/cart' >
            {cartItems.length > 0 
              ? <HiShoppingBag className='icon-react' />
              : <HiOutlineShoppingBag className='icon-react' />}
          </Link>
          <div className="header_bag-pNumber">
            <p>{cartItems.length}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;