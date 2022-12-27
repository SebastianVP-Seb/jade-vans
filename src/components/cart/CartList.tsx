import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { decrement } from "../../store/reducers/cartSlice";
import "./cartList.scss";

const CartList = ({ item }: any) => {
  const dispatch = useDispatch();

  const removeItem = (id: any) => {
    dispatch(decrement(id));
    // localStorage.removeItem('cart-vans');
  };

  return (
    <div className="cartList">
      <img className="cartList_img" src={item.imgUrl} />
      <div className="cartList_blocks">
        <AiOutlineDelete
          className="icon-react_delete"
          onClick={() => removeItem(item)}
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
