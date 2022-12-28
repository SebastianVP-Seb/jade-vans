import { createSlice } from "@reduxjs/toolkit";
import { IItemProduct } from '../../interfaces/index';

const initialState: Array<IItemProduct> = [];
// export let arrayStorage: any = JSON.parse(localStorage.getItem("cart-vans"));
// const initialState = localStorage.getItem('cart-vans');
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.push(action.payload);
      const itemFound = state.find((item: any) => item.id === action.payload.id);
      console.log(itemFound);
      if (itemFound) {
        itemFound.added = true;
        console.log(itemFound)
      // arrayStorage.push(
      //   localStorage.setItem("cart-vans", JSON.stringify(action.payload))
      // );
      }
    },
    decrement: (state, action) => {
      // state.filter((item: any)=>item.id!=action.payload)
      // console.log(action.payload)
      const itemFound = state.find((item: any) => item.id === action.payload.id);
      console.log({state, action, itemFound});
      
      // state.map((item:any)=>item.id == action.payload.id ? nuevoItem=item : item)
      // state.find((item:any)=>(item.id === action.payload.id) ? item.added = false : item)
      // if (itemFound) {
      //   console.log(action.payload.added)
      //   itemFound.added = true;
      //   state.splice(state.indexOf(itemFound), 1);
      //   console.log(itemFound)
      //   // localStorage.removeItem('cart-vans');
      // }
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
