import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import { decrement } from "../../store/reducers/cartSlice";
import "./cartList.scss";

const CartList = ({ item }: any) => {
  const dispatch = useDispatch();

  const handleRemove = (item: any) => {
    dispatch(decrement(item));
  };

  return (
    <div className="cartList">
      <img className="cartList_img" src={item.imgUrl} />
      <div className="cartList_blocks">
        <AiOutlineDelete
          className="icon-react_delete"
          onClick={() => handleRemove(item)}
        />
        <div className="cartList_info">
          <h4>{item.name}</h4>
          <div className="cartList_info-extra">
            <p>${item.price}</p>
            <p>Talla: {item.size}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartList;
