import { configureStore } from "@reduxjs/toolkit";
import socialIconReducer from "../features/socialIcons/socialIconsSlice";
import listContainerReducer from "../features/socialIcons/listContainerSlice";
// import { createLogger } from "redux-logger";

// const logger = createLogger();

export const store = configureStore({
  reducer: {
    socialIcons: socialIconReducer,
    listContainer: listContainerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
