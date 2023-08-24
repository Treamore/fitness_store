import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentItems: [],
};

export const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    setCurrentItems(state, action) {
      state.currentItems = action.payload;
    },
  },
});

export const { setCurrentItems } = itemsSlice.actions;

export default itemsSlice.reducer;
