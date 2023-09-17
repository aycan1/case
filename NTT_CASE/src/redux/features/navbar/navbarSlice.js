import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isGridVisible: false,
};

export const navbarSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setGridVisible: (state) => {
      state.isGridVisible = true;
    },
    setGridInvisible: (state) => {
      state.isGridVisible = false;
    },
  },
});

export const { setGridVisible, setGridInvisible } = navbarSlice.actions;
export default navbarSlice.reducer;
