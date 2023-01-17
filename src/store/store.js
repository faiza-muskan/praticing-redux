import { configureStore } from "@reduxjs/toolkit";
import myCartReducer from "./myCart-store";
import cartReducer from "./cart-slice";

const store = configureStore({
  reducer: {
    myCart: myCartReducer,
    cart: cartReducer,
  },
});

export default store;
