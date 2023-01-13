import { configureStore } from "@reduxjs/toolkit";
import myCartReducer from "./myCart-store";
import counterReducer from "./counter-store";

const store = configureStore({
  reducer: {
    myCart: myCartReducer,
    counter: counterReducer,
  },
});

export default store;
