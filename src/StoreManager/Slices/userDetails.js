import { createSlice } from "@reduxjs/toolkit";

const userDetailsInitialState = {
    id: 0,
    name: "Alex",
    email: "alex@gmail.com",
    status: "Active",
    account: 999999,
    program: "$50,000 Evl."
};

const userDetails = createSlice({
  name: "User",
  initialState: userDetailsInitialState,
  reducers: {
    setUserDetails(state, { payload }) {
      
    },
    clearUserDetails(state,{payload}) {

    }
  },
});

export const { setUserDetails, clearUserDetails } = userDetails.actions;

export default userDetails.reducer;
