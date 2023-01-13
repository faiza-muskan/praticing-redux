import { configureStore } from "@reduxjs/toolkit";
import myCartReducer from "./myCart-store";

const store = configureStore({
  reducer: {
    myCart: myCartReducer,
  },
});

export default store;
