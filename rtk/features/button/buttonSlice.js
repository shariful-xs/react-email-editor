import { createSlice } from "@reduxjs/toolkit";
export const buttonSlice = createSlice({
  name: "button",
  initialState: {
    href: "",
  },
  reducers: {
    setUrl: (state, action) => {
      state.href = action.payload;
    },
  },
});
export const { setUrl } = buttonSlice.actions;
export default buttonSlice.reducer;
