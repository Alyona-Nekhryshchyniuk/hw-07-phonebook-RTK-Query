import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './filterSlice';
import { contactAPI } from './contactAPI';

export const store = configureStore({
  reducer: {
    [contactAPI.reducerPath]: contactAPI.reducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactAPI.middleware),
});
