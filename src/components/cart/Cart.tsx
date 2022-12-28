import React from "react";
import CartList from "./CartList";
import { useSelector } from "react-redux";
import { RootState } from "../../store/index";
import EmptyCart from "./EmptyCart";

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
      {/* <p>Toma captura a esta lista de productos y solicita información (:</p> */}
      <div className="cart_list">
        {
          state.length > 0 
            ? (
              state.map((item: any) => (
          <CartList key={item} item={item} />
        ))
            )
          : (<EmptyCart />)
        }
      </div>
    </div>
  );
};

export default Cart;
