import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { showButton: true };

const togglerSlice = createSlice({
  name: "button",
  initialState,
  reducers: {
    toggleButton(state) {
      state.showButton = !state.showButton;
    },
  },
});

export const togglerActions = togglerSlice.actions;
export default togglerSlice.reducer;
