import React from "react";
import CartList from "./CartList";
import { useSelector } from "react-redux";
import { RootState } from "../../store/index";

const Cart = () => {
  const state = useSelector((state: RootState) => state.cart);
//   const cat = localStorage.getItem('cart-vans');
// //   console.log(cat)
//     let cartLocalStorage=[];
//     const exist = localStorage.getItem("cart-vans");
//     if(exist) {
//     }

  return (
    <div>
      <p>Toma captura a esta lista de productos y solicita información (:</p>
      <div className="cart_list">
        {state.map((item: any) => (
          <CartList key={item} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
