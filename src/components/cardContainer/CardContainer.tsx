import React from 'react';
import { Link } from 'react-router-dom';
import { ICardContainer } from '../../interfaces/index';

const CardContainer: React.FC<ICardContainer> = ({imgUrl, text}) => {
  return (
    <div className='background-image-card' style={{backgroundImage: `url(${imgUrl})`}} >
      <Link to={`${text.toLowerCase()}`} className='divContainer-item'>{text}</Link>     
    </div>
  );
};

export default CardContainer;