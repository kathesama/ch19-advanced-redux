import { createSlice } from '@reduxjs/toolkit';
import { showNotification } from '../ui/uiSlice';

const initialState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0.0,
  changed: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity += 1;
      state.totalPrice += newItem.price || 0;

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        existingItem.quantity += 1;
        existingItem.totalPrice += newItem.price;
      }
    },
    removeItem(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.changed = true;

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity -= 1;
        existingItem.totalPrice -= existingItem.price;
      }
      state.totalQuantity -= 1;
      state.totalPrice -= existingItem.price || 0;
    },
    clearCart(state, action) {
      return {
        ...initialState,
      };
    },
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
  },
});

export const { addItem, removeItem, clearCart, replaceCart } = cartSlice.actions;

export default cartSlice.reducer;
