import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState, SearchState } from '../models';

const initialState: AppState = {
  search: {
    searchTerm: '',
    page: 1,
    itemsPerPage: 10,
  },
};
export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.search.searchTerm = action.payload;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.search.page = action.payload;
    },
    setItemsPerPage: (state, action: PayloadAction<number>) => {
      state.search.itemsPerPage = action.payload;
    },
    setBookId: (state, action: PayloadAction<string>) => {
      state.selectedBookId = action.payload;
    },
  },
});
