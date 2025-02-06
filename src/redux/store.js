import { configureStore } from '@reduxjs/toolkit';
import allSortSlice from './slices/allSortSlice';
import cartSlice from './slices/cartSlice';
import pizzaSlice from './slices/pizzaSlice';

export default configureStore({
  reducer: {
    allSort: allSortSlice,
    cart: cartSlice,
    pizzas: pizzaSlice,
  },
});
