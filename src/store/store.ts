import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { appSlice } from './reducer';
import { booksApi } from './books-query';

export const store = configureStore({
  reducer: {
    [booksApi.reducerPath]: booksApi.reducer,
    appState: appSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(booksApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
