import { loginFailure, loginStart, loginSuccess, logout } from "./reduxUser";
import { publicRequest } from "../request";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/signin", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const logoutUser = async (dispatch) => {
  dispatch(logout());
};