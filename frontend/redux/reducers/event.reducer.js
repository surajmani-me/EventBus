import * as types from "../actionTypes/event.actionTypes";

const initialState = {
  events: [],
  isLoading: true,
};

const eventReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_EVENTS:
      return {
        ...state,
        events: payload,
        isLoading: false,
      };
    case types.SET_LOADING_EVENTS:
      return {
        ...state,
        isLoading: payload,
      };
    case types.ADD_EVENT:
      return {
        ...state,
        events: [...state.events, payload],
      };

    default:
      return state;
  }
};

export default eventReducer;
