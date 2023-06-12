import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  cartItems: [],
  withListItems: [],
  totalAmount: 0,
  quantity: 0,
};

const STORAGE_KEY = "cartItems";
const WITH_LISTS_ITEMS = "withListItems";

const storedItems = Cookies.get(STORAGE_KEY);
const withListItems = Cookies.get(WITH_LISTS_ITEMS);

if (storedItems) {
  initialState.cartItems = JSON.parse(storedItems);
  initialState.totalAmount = calculateTotalAmount(initialState.cartItems);
  initialState.quantity = calculateTotalQuantity(initialState.cartItems);
}
if (withListItems) {
  initialState.withListItems = JSON.parse(withListItems);
}
function calculateTotalAmount(cartItems) {
  return cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
}
function calculateTotalQuantity(cartItems) {
  return cartItems.reduce((quantity, item) => quantity + item?.quantity, 0);
}

const decTotalAmount = (cartItems) => {
  return cartItems.reduce(
    (total, item) => total + item.price * item?.quantity,
    0
  );
};
const decTotalQuantity = (cartItems) => {
  return cartItems.reduce((quantity, item) => quantity - item?.quantity, 0);
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const isExisted = state.cartItems.find((item) => item.id === payload.id);
      if (isExisted) {
        return state;
      } else {
        state.cartItems = [...state.cartItems, { ...payload, quantity: 1 }];
        state.totalAmount = calculateTotalAmount(state.cartItems);
        state.quantity = calculateTotalQuantity(state.cartItems);
        Cookies.set(STORAGE_KEY, JSON.stringify(state.cartItems));
      }
    },

    removeFromCart: (state, { payload }) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== payload.id
      );
      state.quantity = decTotalQuantity(state.cartItems);
      state.totalAmount = decTotalAmount(state.cartItems);
      Cookies.set(STORAGE_KEY, JSON.stringify(state.cartItems));
    },
    addItemsQuantity: (state, { payload }) => {
      state.cartItems = state.cartItems.map((item) => {
        if (item.id == payload.id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
      state.quantity = calculateTotalQuantity(state.cartItems);
      state.totalAmount = calculateTotalAmount(state.cartItems);
      Cookies.set(STORAGE_KEY, JSON.stringify(state.cartItems));
    },
    subItemQuantity: (state, { payload }) => {
      const subItem = state.cartItems.find((item) => item.id === payload.id);
      state.cartItems = state.cartItems.map((item) => {
        if (subItem.quantity > 1) {
          if (item.id === payload.id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        }
      });
      state.quantity = decTotalQuantity(state.cartItems);
      state.totalAmount = decTotalAmount(state.cartItems);
      Cookies.set(STORAGE_KEY, JSON.stringify(state.cartItems));
    },
    clearAll: (state, { payload }) => {
      state.cartItems = [];
      Cookies.set(STORAGE_KEY, JSON.stringify(state.cartItems));
    },
  },
});

// console.log(initialState.totalAmount);

export const {
  addToCart,
  removeFromCart,
  addItemsQuantity,
  subItemQuantity,
  clearAll,
} = cartSlice.actions;
export default cartSlice.reducer;
