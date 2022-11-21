import * as types from "../actionTypes/organization.actionTypes";

const initialState = {
  organizations: [],
  isLoading: true,
};

const organizationReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SET_ORGANIZATIONS:
      return {
        ...state,
        organizations: payload,
        isLoading: false,
      };
    case types.ADD_ORGANIZATION:
      return {
        ...state,
        organizations: [...state.organizations, payload],
        isLoading: false,
      };
    case types.UPDATE_ORGANIZATION:
      return {
        ...state,
        organizations: state.organizations.map((organization) =>
          organization.id === payload.id ? payload : organization
        ),
        isLoading: false,
      };
    case types.DELETE_ORGANIZATION:
      return {
        ...state,
        organizations: state.organizations.filter(
          (organization) => organization.id !== payload
        ),
        isLoading: false,
      };
    case types.RESET_ORGANIZATIONS:
      return {
        ...state,
        organizations: [],
        isLoading: false,
      };
    case types.SET_LOADING_ORGANIZATIONS:
      return {
        ...state,
        isLoading: payload,
      };

    default:
      return state;
  }
};

export default organizationReducer;
