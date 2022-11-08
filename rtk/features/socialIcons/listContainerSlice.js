import { createSlice } from "@reduxjs/toolkit";
import {
  BsFacebook,
  BsYoutube,
  BsTwitter,
  BsFillCameraFill,
} from "react-icons/bs";

const listContainerSlice = createSlice({
  name: "listContainer",
  initialState: {
    iconsList: [
      {
        _id: `${Date.now() + Math.random() * 99}`,
        name: "Facebook",
        icon: BsFacebook,
        url: "https://www.facebook.com/",
      },
      {
        _id: `${Date.now() + Math.random() * 99}`,
        name: "Twiter",
        icon: BsTwitter,
        url: "https://twitter.com/login",
      },
      {
        _id: `${Date.now() + Math.random() * 99}`,
        name: "You Tube",
        icon: BsYoutube,
        url: "",
      },
      {
        _id: `${Date.now() + Math.random() * 99}`,
        name: "Camera",
        icon: BsFillCameraFill,
        url: "",
      },
    ],
  },
  reducers: {
    addIcon: (state, action) => {
      state.iconsList.push(action.payload);
    },
    removeIcon: (state, action) => {
      const item = action.payload;
      const restItemsList = state.iconsList.filter(
        (singleItem) => singleItem._id !== item._id
      );
      state.iconsList = restItemsList;
    },
  },
});

export const { addIcon, removeIcon } = listContainerSlice.actions;

export default listContainerSlice.reducer;
