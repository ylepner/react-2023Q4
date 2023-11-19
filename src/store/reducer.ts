import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState } from '../models';

const initialState: AppState = {
  search: {
    searchTerm: '',
    page: 0,
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
    setBookId: (state, action: PayloadAction<string | undefined>) => {
      state.selectedBookId = action.payload;
    },
  },
});

export const { setSearchTerm, setPage, setItemsPerPage, setBookId } =
  appSlice.actions;
