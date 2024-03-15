import { configureStore } from '@reduxjs/toolkit';

import todoReducer from '../features/todoListSlise';
import filterReducer from './filtersSlice';


export const store = configureStore({
  reducer: {
    todos: todoReducer,
    filters: filterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
