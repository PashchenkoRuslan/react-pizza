import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalPrice: 0,
  totalItems: 0,
  items: [],
};

export const allSortSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const findItem = state.items.find((item) => item.title === action.payload.title);
      if (findItem) {
        findItem.count += 1;
      } else {
        // action.payload.count = 1;
        state.items.push({ ...action.payload, count: 1 });
      }

      state.totalItems += 1;
      state.totalPrice += action.payload.price;
    },
    clearCart: (state) => {
      state.items = [];
      state.totalItems = 0;
      state.totalPrice = 0;
    },
    plusItem: (state, action) => {
      const findItem = state.items.find((item) => item.title === action.payload.title);
      findItem.count += 1;
      state.totalItems += 1;
      state.totalPrice += action.payload.price;
    },
    minusItem: (state, action) => {
      const findItem = state.items.find((item) => item.title === action.payload.title);
      if (findItem.count != 1) {
        // console.log('не 0');
        // console.log('findItems', findItem.count);
        findItem.count--;
        state.totalItems -= 1;
        state.totalPrice -= action.payload.price;
      } else {
        const findItem = state.items.find((item) => item.title === action.payload.title);
        console.log(findItem);
        state.totalItems -= findItem.count;
        state.totalPrice -= findItem.count * findItem.price;
        state.items = state.items.filter((obj) => obj.title !== action.payload.title);
      }
    },
    removeItem: (state, action) => {
      const findItem = state.items.find((item) => item.title === action.payload);
      state.items = state.items.filter((obj) => obj.title != action.payload);
      state.totalItems -= findItem.count;
      state.totalPrice -= findItem.count * findItem.price;
    },
  },
});

export const { addItem, clearCart, plusItem, minusItem, removeItem } = allSortSlice.actions;

export default allSortSlice.reducer;
