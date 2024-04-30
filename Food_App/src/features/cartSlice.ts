import { createSlice } from "@reduxjs/toolkit";
import { Dishes } from "../constants/Dishes";
interface CartItem {
  id: string;
  name: string;
  image: string;
  price: number;
  totalPrice: number;
  quantity: number;
}

// Define the initial state of the cart
interface CartState {
  items: CartItem[];
  totalQuantity: number;
  totalAmount: number;
}

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    //logic for adding item in cart if it is new make a new object or use
    addCartItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          quantity: 1,
          price: newItem.price,
          totalPrice: newItem.price,
          name: newItem.title,
          image: newItem.image,
        });
        state.totalAmount += newItem.price;
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
        state.totalAmount += existingItem.price;
      }
    },
    removeCartItem(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
        state.totalAmount -= existingItem.price;
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
        state.totalAmount -= existingItem.price;
      }
    },
  },
});

export const { addCartItem, removeCartItem } = cartSlice.actions;
export default cartSlice.reducer;
// id: newItem.id,
//           quantity: 1,
//           price: newItem.price,
//           totalPrice: newItem.price,
//           name: newItem.title,
//           image: newItem.image,
