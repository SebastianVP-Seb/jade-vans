import React from 'react';
import { Link } from 'react-router-dom';
import { ICardContainer } from '../../db/cardContainer';

const SelectPage: React.FC<ICardContainer> = ({text, imgUrl}) => {
  return (
    <div  className='background-image' style={{ backgroundImage: `url(${imgUrl})`}}>
      <Link to={text} className='divContainer-item ' >{text}</Link>
    </div>
  );
};

export default SelectPage;