import { configureStore } from '@reduxjs/toolkit';
import landlordLoginSlice from '../loginFeature/landlordLoginSlice';
import postNewRoomSlice from '../postNewRoom/postNewRoomSlice';

console.log('within store');
 
const store = configureStore({
  reducer: {
    landlordLoginInfo: landlordLoginSlice,
    uploadRoom: postNewRoomSlice,
  },
});
export default store;
