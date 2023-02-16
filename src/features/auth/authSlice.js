import { createSlice } from '@reduxjs/toolkit';

const tokenSlice = createSlice({
  name: 'token',
  initialState: {
    token: {},
    name: '',
  },
  reducers: {
    updateToken: (state, action) => {
      state.token = action.payload;
    },
    updateName: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { updateName, updateToken } = tokenSlice.actions;

export default tokenSlice.reducer