import React from 'react';
import { Link } from 'react-router-dom';

const SelectPage = () => {
  return (
    <div>
        <Link to='Caballero' className='button' >Caballero</Link>
        <Link to='Dama' className='button' >Dama</Link>
        <Link to='Infantil' className='button' >Infantil</Link>
    </div>
  );
};

export default SelectPage;