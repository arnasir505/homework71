import { configureStore } from '@reduxjs/toolkit';
import { dishFormReducer } from '../store/dishFormSlice/dishFormSlice';

export const store = configureStore({
  reducer: {
    dishForm: dishFormReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
