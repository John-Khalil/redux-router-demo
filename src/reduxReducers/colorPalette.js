import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = "red";

export const sliceObject = createSlice({
  name: "colorPalette",
  initialState: { value: initialStateValue },
  reducers: {
    finalColor: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { finalColor } = sliceObject.actions;

export default sliceObject.reducer;


// this is a boilerplate code that should remain somewhat unchanged