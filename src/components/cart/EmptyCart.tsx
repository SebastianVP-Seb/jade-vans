import React from 'react';
import { Link } from 'react-router-dom';
import ImagenCart from '../../images/empty_bag.png';
import './emptyCart.scss';

const EmptyCart: React.FC = () => {
  return (
    <div className='emptyCart'>
        <img src={ImagenCart} alt='Empty bag' />
        <p>Tu bolsa está vacía</p>
        <Link to='/' >
            <button className='emptyCart_buttonCart' >Añadir artículos</button>
        </Link>
    </div>
  );
};

export default EmptyCart;