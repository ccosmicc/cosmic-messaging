import {
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
  sendNewMessageStart,
  sendNewMessageSuccess,
  sendNewMessageFailure,
} from "./userSlice";
import { publicRequest, userRequest } from "../requestMethods";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    if(res.data.username == "cosmic") {
      localStorage.setItem("PUBLIC_KEY", "u8c5pCdJBRk3AikH9ik0m+hI41eQoJaKwdLjQWsVihY=");
      localStorage.setItem("PRIVATE_KEY","oIu2Awzn7NFDA45RBaG3nTdMmgKQat1HKPEY7UY0dJE=");
    }
    dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};

export const signup = async (dispatch, user) => {
  dispatch(registerStart());
  try {
    const res = await publicRequest.post("/auth/register", user);
    const friend = await publicRequest.put("/users/cosmic/add", {"_id": res.data._id});
    const conversation = await publicRequest.post("/conversations", {"senderId": res.data._id,
  "receiverId": "WwhdtvyklGhh"});
    dispatch(registerSuccess(res.data));
  } catch (error) {
    dispatch(registerFailure());
  }
};

export const getFriends = async (dispatch, user) => {
  const userID = user._id;
  dispatch(getFriendsStart());
  try {
    const res = await publicRequest.get("/users/friends/" + userID);
    dispatch(getFriendsSuccess(res.data));
    return res;
  } catch (error) {
    dispatch(getFriendsFailure());
  }
};

export const getConversations = async (dispatch, user) => {
  const userID = user._id;
  dispatch(getConversationsStart());
  try {
    const res = await publicRequest.get("/conversations/" + userID);
    dispatch(getConversationsSuccess(res.data));
  } catch (error) {
    dispatch(getConversationsFailure());
  }
};

/*
TODO:It is temporary solution
We need to reach the user profile picture and name to use in the conversation list in the sidebar accordion  */
export const getUser = async (userID) => {
  try {
    const res = await userRequest.get("/users/find/" + userID);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getMessages = async (dispatch, currentChat) => {
  const chatID = currentChat?._id;
  dispatch(getMessagesStart());
  try {
    const res = await publicRequest.get("/messages/" + chatID);
    dispatch(getMessagesSuccess(res.data));
  } catch (error) {
    dispatch(getMessagesFailure());
  }
};

export const sendNewMessage = async (dispatch, messages, newMessage) => {
  dispatch(sendNewMessageStart());
  try {
    const res = await publicRequest.post("/messages", newMessage);
    dispatch(sendNewMessageSuccess([...messages, res.data]));
  } catch (error) {
    dispatch(sendNewMessageFailure());
  }
};
