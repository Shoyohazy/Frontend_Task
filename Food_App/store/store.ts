import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../src/features/cartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
