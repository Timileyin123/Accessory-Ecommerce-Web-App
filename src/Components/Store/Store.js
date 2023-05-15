import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slice/cartSlice";
import modalReducer from "./Slice/modalSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
  },
});
