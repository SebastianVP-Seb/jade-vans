import React from 'react';
import { Link } from 'react-router-dom';
import { CARD_CONTAINER, ICardContainer } from '../../db/cardContainer';

const SelectPage: React.FC = () => {
  return (
    <div className='divContainer'>
      {CARD_CONTAINER.map(item=>(
      <div key={item.text} style={{backgroundImage: `url(${item.imgUrl})`}} className='background-image'>
        <Link to={item.text} className='divContainer-item'>{item.text}</Link>
      </div>))}
    </div>
  );
};

export default SelectPage;