import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  // { name: 'john', email: 'johnbanda@gmail.com' },
];

const landlordLoginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    landlordLogin: (state, action) => {
      state.push(action.payload);
    },
  },
});
export const selectAllLandlordInfo = (state) => state.landlordLoginInfo;
console.log('within landlordslice');
export const { landlordLogin } = landlordLoginSlice.actions;
export default landlordLoginSlice.reducer;
