import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cardType: false,
  sortCategory: '0',
  category: '',
  subcategory: '',
  itemPage: '',
};

export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setSortType(state, action) {
      state.sortCategory = action.payload;
    },
    setCardType(state, action) {
      state.cardType = action.payload;
    },
    setCategory(state, action) {
      state.category = action.payload;
    },
    setSubcategory(state, action) {
      state.subcategory = action.payload;
    },
    setItemPage(state, action) {
      state.itemPage = action.payload;
    },
    setFilters(state, action) {
      state.sortCategory = action.payload.sort;
    },
  },
});

export const { setSortType, setCardType, setCategory, setSubcategory, setItemPage, setFilters } =
  filterSlice.actions;

export default filterSlice.reducer;
