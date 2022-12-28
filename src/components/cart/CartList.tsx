import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { decrement } from "../../store/reducers/cartSlice";
import "./cartList.scss";
import { RootState } from '../../store/index';

const CartList = ({ item }: any) => {
  console.log(item)
  const dispatch = useDispatch();
  // const store = useSelector((state: RootState) => state.cart);


  const handleRemove = (item: any) => {
    dispatch(decrement(item));
    // localStorage.handleRemove('cart-vans');
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
            <p>Precio: ${item.price}</p>
            <p>Talla: {item.size}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartList;
