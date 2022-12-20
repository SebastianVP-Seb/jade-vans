import React from 'react';

interface ICard {
    imgUrl: string;
    name: string;
    description: string;
    size: number;
    price: number
};

const Card: React.FC<ICard> = ({imgUrl, name, description, price, size}) => {
  return (
    <div>
        <img src={imgUrl} />
        <h4>{name}</h4>
        <p>{description}</p>
        <h3>{price}</h3>
        <h5>{size}</h5>
    </div>
  );
};

export default Card;