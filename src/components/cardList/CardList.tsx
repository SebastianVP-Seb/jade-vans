import React from 'react';
import { dbTenisMan } from '../../db/tenisMan';
import Card from '../card/Card';

const CardList = () => {
  return (
    <div>
      {
        dbTenisMan.map((item)=>(
          <Card {...item}/>
        ))
      }
    </div>
  );
};

export default CardList;