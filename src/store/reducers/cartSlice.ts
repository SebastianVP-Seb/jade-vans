import { createSlice } from "@reduxjs/toolkit";

// export interface CounterState {
//   value: number
// }

const initialState: any = [];
// export let arrayStorage: any = JSON.parse(localStorage.getItem("cart-vans"));
// const initialState = localStorage.getItem('cart-vans');
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      //item completo
      state.push(action.payload);
      const itemFound = state.find((item: any) => item.id === action.payload.id);
      if (itemFound) {
        itemFound.added = true;
        console.log(itemFound)
        // console.log(item)
      // arrayStorage.push(
      //   localStorage.setItem("cart-vans", JSON.stringify(action.payload))
      // );
      }
    },
    decrement: (state, action) => {
      // state.filter((item: any)=>item.id!=action.payload)
      console.log(action.payload.added)
      const itemFound = state.find((item: any) => item.id === action.payload.id);
      // let nuevoItem;
      // state.map((item:any)=>item.id == action.payload.id ? nuevoItem=item : item)
      // console.log(nuevoItem)
      console.log(state)
      // state.find((item:any)=>(item.id === action.payload.id) ? item.added = false : item)
      if (itemFound) {
        itemFound.added = false;
        console.log(action.payload.added)
        state.splice(state.indexOf(itemFound), 1);
        // localStorage.removeItem('cart-vans');
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
