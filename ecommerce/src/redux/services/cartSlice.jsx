import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  saveItems: [],
  totalAmount: 0,
  quantity: 0,
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      state.cartItems = [state.cartItems, { ...payload, quantity: 1 }];
    },
  },
});
