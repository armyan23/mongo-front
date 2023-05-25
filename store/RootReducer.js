import { combineReducers } from "redux";
import authReducer from "store/auth/reducer";
import peopleReducer from "store/people/reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  people: peopleReducer,
});

export default rootReducer;
