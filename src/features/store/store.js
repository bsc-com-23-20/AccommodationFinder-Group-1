import { configureStore } from '@reduxjs/toolkit';
import loginSlice from '../loginFeature/loginSlice';

const store = configureStore({
  reducer: {
    login: loginSlice,
  },
});
export default store;
