import {
  getAccountRequest,
  getAccountSuccess,
  getAccountFailure,
} from "./action";
import { handleActions } from "redux-actions";

const initialState = {
  isGetAccountRequest: false,
  isGetAccountSuccess: false,
  isGetAccountFailure: false,
  account: {},
  errorMessage: "",
};

const accountReducer = handleActions(
  {
    [getAccountRequest]: (state) => ({
      ...state,
      isGetAccountRequest: true,
      isGetAccountSuccess: false,
      isGetAccountFailure: false,
    }),
    [getAccountSuccess]: (state, { payload }) => ({
      ...state,
      isGetAccountRequest: false,
      isGetAccountSuccess: true,
      account: payload.data,
    }),
    [getAccountFailure]: (state, { payload }) => ({
      ...state,
      isGetAccountRequest: false,
      isGetAccountFailure: true,
      errorMessage: payload,
    }),
  },
  initialState
);

export default accountReducer;
