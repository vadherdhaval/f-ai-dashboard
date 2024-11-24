import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

const themeInitialState = {theme: "light"}

const theme = createSlice({
  name: "Theme",
  initialState: themeInitialState,
  reducers: {
    setTheme(state, { payload }) {
        console.log(payload.theme)
      state.theme = payload.theme;
    },
    clearTheme(state, { payload }) {
      state = "light";
    },
  },
});
export const updateTheme = createAsyncThunk(
    "workflow",
    async (payload, { dispatch }) => {
      // console.log("***** stageComplete - Start");
      debugger;
      try {
          dispatch(setTheme(payload))
      } catch (err) {
        console.log(err)
      } finally {
        
      }
    }
);
export const { setTheme, clearTheme } = theme.actions;

export default theme.reducer;
