import { configureStore } from '@reduxjs/toolkit';
import { dishFormReducer } from '../store/dishFormSlice/dishFormSlice';
import { dishesReducer } from '../store/dishesSlice/dishesSlice';

export const store = configureStore({
  reducer: {
    dishForm: dishFormReducer,
    dishes: dishesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
