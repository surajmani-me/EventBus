import * as types from "../actionTypes/auth.actionTypes";

const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
};

const authReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case types.LOGIN:
      return {
        ...state,
        user: payload.user,
        token: payload.token,
        isAuthenticated: true,
      };
    case types.LOGOUT:
      return {
        ...state,
        user: null,
        token: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export default authReducer;
