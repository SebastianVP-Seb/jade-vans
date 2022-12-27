import { createSlice } from "@reduxjs/toolkit";

// export interface CounterState {
//   value: number
// }

const initialState: any = {
  id:'',
  added: false,
  name: 'Surf Colfax Boot MTE-1 Verde V3RX',
  description: 'Desc',
  price: 600,
  size: 3,
  imgUrl: 'htt'
};
// export let arrayStorage: any = JSON.parse(localStorage.getItem("cart-vans"));
// const initialState = localStorage.getItem('cart-vans');
export const itemSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    itemSelected: (state, action) => {
      state.id = action.payload.id
      state.added = action.payload.added
      state.name = action.payload.name
      state.description = action.payload.description
      state.price = action.payload.price
      state.size = action.payload.size
      state.imgUrl = action.payload.imgUrl
    }
  },
});

// Action creators are generated for each case reducer function
export const { itemSelected } = itemSlice.actions;

export default itemSlice.reducer;
