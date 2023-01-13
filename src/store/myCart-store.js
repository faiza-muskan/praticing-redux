import { createSlice } from "@reduxjs/toolkit";

const initialValue = { showCart: false };

const myCartSlice = createSlice({
  name: "myCart",
  initialState: initialValue,
  reducers: {
    toggle(state) {
      state.showCart = !state.showCart;
    },
  },
});

export const myCartAction = myCartSlice.actions;

export default myCartSlice.reducer;
