import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchIds: [],
  chosenIds: [],
  searchValue: '',
  markedCatgrsQuantity: 0,
  searchCatgrsQuantity: 0,
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
    setSearchId(state, action) {
      const categoryId = state.searchIds.find((id) => id === action.payload);
      if (categoryId) {
        state.searchIds = state.searchIds.filter((id) => categoryId !== id);
      } else {
        state.searchIds.push(action.payload);
      }
    },
    setChosedIds(state) {
      state.chosenIds = state.searchIds;
    },
    setSearchIds(state, action) {
      state.searchIds = action.payload;
    },
    setMarkedCatgrsQuantity(state, action) {
      state.markedCatgrsQuantity = action.payload;
    },
    setSearchCatgrsQuantity(state) {
      state.searchCatgrsQuantity = state.markedCatgrsQuantity;
    },
  },
});

export const {
  setSearchValue,
  setSearchId,
  setChosedIds,
  setSearchCatgrsQuantity,
  setMarkedCatgrsQuantity,
  setSearchIds,
} = searchSlice.actions;

export default searchSlice.reducer;
