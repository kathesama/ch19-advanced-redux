import { combineReducers } from '@reduxjs/toolkit';

import uiReducer from './ui/uiSlice';
import cartReducer from './cart/cartSlice';

const rootReducer = combineReducers({
  ui: uiReducer,
  cart: cartReducer,
});

export default rootReducer;
