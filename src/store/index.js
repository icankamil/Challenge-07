import { configureStore } from "@reduxjs/toolkit";
import togglerReducer from "./button";

const store = configureStore({
  reducer: {
    button: togglerReducer,
  },
});

export default store;
