import { configureStore } from '@reduxjs/toolkit';
import landlordLoginSlice from '../loginFeature/landlordLoginSlice';
import postNewRoomSlice from '../postNewRoom/postNewRoomSlice';

const store = configureStore({
  reducer: {
    landLogin: landlordLoginSlice,
    uploadRoom: postNewRoomSlice,
  },
});
export default store;
