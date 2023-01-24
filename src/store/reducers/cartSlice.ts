import { createSlice } from "@reduxjs/toolkit";
import { rootArray } from "../../db/tenisMan";
import { IItemProduct } from '../../interfaces/index';

interface IInitialState {
  totalProducts: Array<IItemProduct>,
  cartItems: Array<IItemProduct>,
  total: number,
};

const initialState: IInitialState = {
  totalProducts: rootArray,
  cartItems: [],
  total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state, action) => {
      const itemAdded = action.payload;
      state.cartItems.push(itemAdded);
      const itemIdAdded = state.totalProducts.find(item =>  item.id === action.payload.id);
      // itemIdAdded.added = true;
    },
    decrement: (state, action) => {
      const itemDeleted = action.payload;
      state.cartItems = state.cartItems.filter(item=>item.id !== itemDeleted.id);
      const itemIdDeleted = state.totalProducts.find(item =>  item.id === action.payload.id);
      // itemIdDeleted.added = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement } = cartSlice.actions;

export default cartSlice.reducer;
