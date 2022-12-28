import React from 'react';
import CardItems from '../cardItems/CardItems';
import './cardList.scss';
import { ICardItems } from '../../interfaces/index';

interface ICardList {
  // items: Array<keyof ICardItems>;
  items: any;
};

const CardList: React.FC<ICardList> = ({items}) => {
  return (
    <div className='cardList' >
      {items.map((item: any)=>(
        <CardItems key={item.id} item={item}  />
        ))}
    </div>
  );
};

export default CardList;
