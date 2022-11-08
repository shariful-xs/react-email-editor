import { createSlice } from "@reduxjs/toolkit";
export const pictureSlice = createSlice({
  name: "picture",
  initialState: {
    file: null,
  },
  reducers: {
    setPicture: (state, action) => {
      state.file = action.payload;
    },
  },
});
export const { setPicture } = pictureSlice.actions;
export default pictureSlice.reducer;
