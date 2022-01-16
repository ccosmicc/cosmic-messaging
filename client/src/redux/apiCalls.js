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
} from "./userSlice";
import { publicRequest, userRequest } from "../requestMethods";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};

export const signup = async (dispatch, user) => {
  dispatch(registerStart());
  try {
    const res = await publicRequest.post("/auth/register", user);
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
