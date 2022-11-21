import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import eventReducer from "./event.reducer";
import organizationReducer from "./organization.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  organization: organizationReducer,
  event: eventReducer,
});

export default rootReducer;
