import React from "react";
import { Link } from "react-router-dom";
import { ICardItems } from '../../interfaces/index';
import "./cardItems.scss";
import "../selectPage/selectPage.scss";

const CardItems: React.FC<ICardItems> = ({ item }: any) => {
  return (
    <div className="cardItems">
      <Link to={item.id.toString()}>
        <img className="cardItems_item" src={item.imgUrl} alt="img"/>
      </Link>
    </div>
  );
};

export default CardItems;
