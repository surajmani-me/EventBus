import * as types from "../actionTypes/auth.actionTypes";
import axios from "axios";
import { toast } from "react-toastify";

const BASE_URL = process.env.BASE_URL || "https://ebb.gdsclpu.live";

// actions

export const loginAction = (payload) => ({
  type: types.LOGIN,
  payload,
});

const logoutAction = () => ({
  type: types.LOGOUT,
});

// action creators

export const register = (payload, setSuccess, setRegistering) => (dispatch) => {
  axios
    .post(`${BASE_URL}/api/auth/register`, payload)
    .then((res) => {
      toast.success(res.data.msg);
      toast.success("Now you can login");
      setSuccess(true);
      setRegistering(false);
    })
    .catch((err) => {
      if (err.response && err.response.data.msg) {
        toast.error(err.response.data.msg);
      }
      setRegistering(false);
    });
};

export const login = (payload, setSuccess, setLoggingIn) => (dispatch) => {
  axios
    .post(`${BASE_URL}/api/auth/login`, payload)
    .then((res) => {
      console.log(res.data);
      dispatch(
        loginAction({
          token: res.data.message.access_token,
          user: res.data.message.user,
        })
      );
      localStorage.setItem(
        "ebp_token",
        JSON.stringify(res.data.message.access_token)
      );

      //set refresh token to cookie
      document.cookie = `ebp_refresh_token=${res.data.message.refresh_token}; path=/; max-age=2592000`;

      setSuccess(true);
      setLoggingIn(false);
      toast.success("Login successfull");
    })
    .catch((err) => {
      console.log(err);
      if (err.response) {
        toast.error(err.response.data.msg);
      }
      setLoggingIn(false);
    });
};

export const loginWithGithub =
  (setSuccess, setLoggingInWithGithub) => (dispatch) => {
    axios
      .post(`${BASE_URL}/api/auth/github`)
      .then((res) => {
        console.log("loginWithGithub", res);
      })
      .catch((err) => {
        console.log("loginWithGithub", err);
        setLoggingInWithGoogle(false);
      });
  };

export const loginWithLinkedIn =
  (setSuccess, setLoggingInWithLinkedIn) => (dispatch) => {};

export const loginWithGoogle =
  (setSuccess, setLoggingInWithGoogle) => (dispatch) => {};
