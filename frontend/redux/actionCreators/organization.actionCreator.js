import axios from "axios";
import { toast } from "react-toastify";
import * as types from "../actionTypes/organization.actionTypes";

const BASE_URL = process.env.BASE_URL || "http://localhost:4000";

// actions

const setOrganizations = (payload) => ({
  type: types.SET_ORGANIZATIONS,
  payload,
});

const addOrganization = (payload) => ({
  type: types.ADD_ORGANIZATION,
  payload,
});

const setLoading = (payload) => ({
  type: types.SET_LOADING_ORGANIZATIONS,
  payload,
});

// action creators

export const getOrganizations = () => (dispatch) => {
  dispatch(setLoading(true));
  axios
    .get(`${BASE_URL}/api/org/`)
    .then((res) => {
      dispatch(setOrganizations(res.data));
      dispatch(setLoading(false));
    })
    .catch((err) => {
      if (err.response && err.response.data.msg) {
        dispatch(setLoading(false));
        toast.error(err.response.data.msg);
      }
    });
};

export const createOrganization =
  (payload, setSuccess, setCreating) => (dispatch) => {
    axios
      .post(`${BASE_URL}/api/org/`, payload)
      .then((res) => {
        console.log(res.data);

        setSuccess(true);
        setCreating(false);
        toast.success("Organization created successfully");
        window.location.href = "/organizations";
      })
      .catch((err) => {
        if (err.response && err.response.data.msg) {
          toast.error(err.response.data.msg);
        }
        setCreating(false);
      });
  };
