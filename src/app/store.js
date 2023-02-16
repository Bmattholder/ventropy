import { configureStore } from '@reduxjs/toolkit';
import tokenReducer from '../features/auth/authSlice';
export const store = configureStore({
  reducer: {
    token: tokenReducer,
  },
});
