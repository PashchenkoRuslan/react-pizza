import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  category: 0,
  sortItem: 0,
  currentPage: 1,
};

export const allSortSlice = createSlice({
  name: 'categoriya',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
      state.currentPage = 1;
    },
    setSortItem: (state, action) => {
      state.sortItem = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setFilters: (state, action) => {
      state.sortItem = action.payload.sortItem;
      state.currentPage = Number(action.payload.currentPage);
      state.category = Number(action.payload.category);
    },
  },
});

export const { setCategory, setSortItem, setCurrentPage, setFilters } = allSortSlice.actions;

export default allSortSlice.reducer;
