import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
    friends: null,
    conversations: null,
    messages: null,
  },

  /* Login is an async function since it makes API request */
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      state.error = false;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    registerStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    registerSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      state.error = false;
    },
    registerFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    getFriendsStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getFriendsSuccess: (state, action) => {
      state.isFetching = false;
      state.friends = action.payload;
      state.error = false;
    },
    getFriendsFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    getConversationsStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getConversationsSuccess: (state, action) => {
      state.isFetching = false;
      state.conversations = action.payload;
      state.error = false;
    },
    getConversationsFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    getMessagesStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getMessagesSuccess: (state, action) => {
      state.isFetching = false;
      state.messages = action.payload;
      state.error = false;
    },
    getMessagesFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  registerStart,
  registerSuccess,
  registerFailure,
  getFriendsStart,
  getFriendsSuccess,
  getFriendsFailure,
  getConversationsStart,
  getConversationsSuccess,
  getConversationsFailure,
  getMessagesStart,
  getMessagesSuccess,
  getMessagesFailure,
} = userSlice.actions;
export default userSlice.reducer;
