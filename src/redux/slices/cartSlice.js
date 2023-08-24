import { createSlice } from '@reduxjs/toolkit';

const localItems = JSON.parse(localStorage.getItem('cart'));
const storage = localItems ? localItems : [];

const initialState = {
  items: storage,
  totalPrice: storage.reduce((sum, obj) => {
    return obj.currentPrice * obj.count + sum;
  }, 0),
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.currentPrice * obj.count + sum;
      }, 0);
    },
    removeItem(state, action) {
      state.items = state.items.filter((obj) => obj.id !== action.payload.id);
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.currentPrice * obj.count + sum;
      }, 0);
    },
    countPlus(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      findItem.count++;
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.currentPrice * obj.count + sum;
      }, 0);
    },
    countMinus(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem.count > 1) {
        findItem.count--;
      }
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.currentPrice * obj.count + sum;
      }, 0);
    },
    setQuantity(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload[0].id);
      if (action.payload[1] > 0) {
        findItem.count = action.payload[1];
      } else {
        findItem.count = 1;
      }
    },
  },
});

export const { addItem, countPlus, countMinus, removeItem, setQuantity } = cartSlice.actions;

export default cartSlice.reducer;
