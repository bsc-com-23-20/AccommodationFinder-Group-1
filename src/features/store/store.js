import { configureStore } from '@reduxjs/toolkit';
import loginSlice from '../loginFeature/loginSlice';
import postNewRoomSlice from '../postNewRoom/postNewRoomSlice';

const store = configureStore({
  reducer: {
    login: loginSlice,
    uploadRoom: postNewRoomSlice,
  },
});
export default store;
