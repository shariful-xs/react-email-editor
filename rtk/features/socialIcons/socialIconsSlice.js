import { createSlice } from "@reduxjs/toolkit";
const socailIconsSlice = createSlice({
  name: "socailIcons",
  initialState: {
    items: [],
  },
  reducers: {
    addIcon: (state, action) => {
      state.items.push(action.payload);
    },
    removeCard: (state, action) => {
      const item = action.payload;
      const restCard = state.items.filter(
        (singleItem) => singleItem._id !== item._id
      );
      state.items = restCard;
    },
    updateInputField: (state, action) => {
      const { value, index } = action.payload;
      state.items[index].url = value;
    },
  },
});

export const { addIcon, removeCard, updateInputField } =
  socailIconsSlice.actions;

export default socailIconsSlice.reducer;
