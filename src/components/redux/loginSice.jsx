import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  check: false,
};

const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    sessionsActions: (state, action) => {
      state.check = action.payload;
    },
  },
});

export const { sessionsActions } = sessionSlice.actions;
export default sessionSlice.reducer;
