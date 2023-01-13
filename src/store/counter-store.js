import { createSlice } from "@reduxjs/toolkit";

const init = { counter: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState: init,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
  },
});

export const counterAction = counterSlice.actions;

export default counterSlice.reducer;
