import { createSlice } from "@reduxjs/toolkit";

const init = { items: [], price: 0, totalQuantity: 0 };

const cartSlice = createSlice({
  name: "cartItems",
  initialState: init,
  reducers: {
    addItemsToCart(state, action) {
      const newAddedItem = action.payload;
      state.totalQuantity++;
      const sameItemInBasket = state.items.find(
        (item) => item.id === newAddedItem.id
      );
      if (!sameItemInBasket) {
        state.items.push({
          id: newAddedItem.id,
          price: newAddedItem.price,
          quantity: 1,
          totalPrice: newAddedItem.price,
          name: newAddedItem.title,
        });
      } else {
        sameItemInBasket.quantity++;
        sameItemInBasket.totalPrice =
          sameItemInBasket.totalPrice + newAddedItem.price;
      }
    },
    removeItemsFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});

export const cartAction = cartSlice.actions;

export default cartSlice.reducer;
