import axios from "axios";
import { toast } from "react-toastify";
import * as types from "../actionTypes/event.actionTypes";

const BASE_URL = process.env.BASE_URL || "http://localhost:4000";

// actions

const getEvents = (events) => ({
  type: types.GET_EVENTS,
  payload: events,
});

const setLoadingEvents = (isLoading) => ({
  type: types.SET_LOADING_EVENTS,
  payload: isLoading,
});

const addEvent = (event) => ({
  type: types.ADD_EVENT,
  payload: event,
});

// action creators

export const getEventsAction = () => (dispatch) => {
  dispatch(setLoadingEvents(true));

  axios
    .get(`${BASE_URL}/api/events/get`)
    .then((res) => {
      dispatch(getEvents(res.data.message));
      dispatch(isLoading(false));
    })
    .catch((err) => {
      console.log(err);

      dispatch(setLoadingEvents(false));
    });
};

export const addEventAction = (event, setSuccess) => (dispatch) => {
  axios
    .post(`${BASE_URL}/api/events/create`, event)
    .then((res) => {
      dispatch(addEvent(res.data.message));
      setSuccess(true);
      toast.success("Event added successfully");
      window.location.href = "/events";
    })
    .catch((err) => {
      console.log(err);
      toast.error("Error adding event");
    });
};
