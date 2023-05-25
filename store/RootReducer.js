import { combineReducers } from "redux";
import authReducer from "store/auth/reducer";

const rootReducer = combineReducers({ auth: authReducer });

export default rootReducer;
