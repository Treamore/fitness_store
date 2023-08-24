import { configureStore } from '@reduxjs/toolkit';
import filterSlice from './slices/filterSlice';
import itemsSlice from './slices/itemsSlice';
import cartSlice from './slices/cartSlice';
import searchSlice from './slices/searchSlice';

export const store = configureStore({
  reducer: {
    filterSlice,
    itemsSlice,
    cartSlice,
    searchSlice,
  },
});
