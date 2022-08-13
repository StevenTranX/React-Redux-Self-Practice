import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './productSlice';
export default configureStore({
  reducer: {
    cart: cartReducer,
  },
});
