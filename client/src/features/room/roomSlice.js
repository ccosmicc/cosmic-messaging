import { createSlice } from "@reduxjs/toolkit";

const roomSlice = createSlice({
  name: "room",
  initialState: {
    name: "general",
    id: null,
  },
  reducers: {},
});

export default roomSlice.reducer;
