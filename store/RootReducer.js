import { combineReducers } from "redux";
import authReducer from "store/auth/reducer";
import peopleReducer from "store/people/reducer";
import accountReducer from "@/store/account/reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  account: accountReducer,
  people: peopleReducer,
});

export default rootReducer;
