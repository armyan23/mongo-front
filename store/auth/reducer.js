import {
  signUpRequest,
  signUpSuccess,
  signUpFailure,
  signInRequest,
  signInSuccess,
  signInFailure,
  authenticatedRequest,
  authenticatedSuccess,
  authenticatedFailure,
} from "./action";
import { handleActions } from "redux-actions";

const initialState = {
  isSignUpRequest: false,
  isSignUpSuccess: false,
  isSignUpFailure: false,
  isSignInRequest: false,
  isSignInSuccess: false,
  isSignInFailure: false,
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

    [signInRequest]: (state) => ({
      ...state,
      isSignInRequest: true,
      isSignInSuccess: false,
      isSignInFailure: false,
    }),
    [signInSuccess]: (state, { payload }) => ({
      ...state,
      isSignInRequest: false,
      isSignInSuccess: true,
      isAuthenticatedSuccess: true,
      userData: payload.data,
    }),
    [signInFailure]: (state, { payload }) => ({
      ...state,
      isSignInRequest: false,
      isSignInFailure: true,
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
