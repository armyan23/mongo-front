import {
  signUpRequest,
  signUpSuccess,
  signUpFailure,
  authenticatedRequest,
  authenticatedSuccess,
  authenticatedFailure,
} from "./action";
import { handleActions } from "redux-actions";

const initialState = {
  isSignUpRequest: false,
  isSignUpSuccess: false,
  isSignUpFailure: false,
  isAuthenticatedRequest: false,
  isAuthenticatedSuccess: false,
  isAuthenticatedFailure: false,
  userData: {},
  successMessage: "",
  errorMessage: "",
};

const authReducer = handleActions(
  {
    [signUpRequest]: (state) => ({
      ...state,
      isSignUpRequest: true,
      isSignUpSuccess: false,
      isSignUpFailure: false,
    }),
    [signUpSuccess]: (state, { payload }) => ({
      ...state,
      isSignUpRequest: false,
      isSignUpSuccess: true,
      successMessage: payload.message,
      userData: payload.data,
    }),
    [signUpFailure]: (state, { payload }) => ({
      ...state,
      isSignUpRequest: false,
      isSignUpFailure: true,
      errorMessage: payload,
    }),

    [authenticatedRequest]: (state) => ({
      ...state,
      isAuthenticatedRequest: true,
      isAuthenticatedSuccess: false,
      isAuthenticatedFailure: false,
    }),
    [authenticatedSuccess]: (state, { payload }) => ({
      ...state,
      isAuthenticatedRequest: false,
      isAuthenticatedSuccess: true,
      userData: payload.data,
    }),
    [authenticatedFailure]: (state) => ({
      ...state,
      isAuthenticatedRequest: false,
      isAuthenticatedFailure: true,
    }),
  },
  initialState
);

export default authReducer;
