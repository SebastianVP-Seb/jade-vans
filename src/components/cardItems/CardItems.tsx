import React from "react";
import "./cardItems.scss";
import "../selectPage/selectPage.scss";
import { Link } from "react-router-dom";

interface ICardItems {
  imgUrl: string;
  id: number;
};

const CardItems: React.FC = ({ item}: any) => {
  const handleOnClick = (item:any) => {
    console.log(`Click a ${{item}}`)
  };
  console.log(item)
  // const [imgUrl, id] = item;
  return (
    <div className="cardItems">
      <Link to={item.id.toString()}>
        <img className="cardItems_item" src={item.imgUrl} alt="img" onClick={()=>handleOnClick(item)} />
      </Link>
    </div>
  );
};

export default CardItems;
