import {
  getAccountRequest,
  getAccountSuccess,
  getAccountFailure,
  updateNameRequest,
  updateNameSuccess,
  updateNameFailure,
  updatePasswordRequest,
  updatePasswordSuccess,
  updatePasswordFailure,
  updatePhotoRequest,
  updatePhotoSuccess,
  updatePhotoFailure,
  deletePhotoRequest,
  deletePhotoSuccess,
  deletePhotoFailure,
} from "./action";
import { handleActions } from "redux-actions";

const initialState = {
  isGetAccountRequest: false,
  isGetAccountSuccess: false,
  isGetAccountFailure: false,
  isUpdateNameRequest: false,
  isUpdateNameSuccess: false,
  isUpdateNameFailure: false,
  isUpdatePasswordRequest: false,
  isUpdatePasswordSuccess: false,
  isUpdatePasswordFailure: false,
  isUpdatePhotoRequest: false,
  isUpdatePhotoSuccess: false,
  isUpdatePhotoFailure: false,
  isDeletePhotoRequest: false,
  isDeletePhotoSuccess: false,
  isDeletePhotoFailure: false,
  account: {},
  successMessage: "",
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

    [updateNameRequest]: (state) => ({
      ...state,
      isUpdateNameRequest: true,
      isUpdateNameSuccess: false,
      isUpdateNameFailure: false,
    }),
    [updateNameSuccess]: (state, { payload }) => ({
      ...state,
      isUpdateNameRequest: false,
      isUpdateNameSuccess: true,
      successMessage: payload.data,
    }),
    [updateNameFailure]: (state, { payload }) => ({
      ...state,
      isUpdateNameRequest: false,
      isUpdateNameFailure: true,
      errorMessage: payload,
    }),

    [updatePasswordRequest]: (state) => ({
      ...state,
      isUpdatePasswordRequest: true,
      isUpdatePasswordSuccess: false,
      isUpdatePasswordFailure: false,
    }),
    [updatePasswordSuccess]: (state, { payload }) => ({
      ...state,
      isUpdatePasswordRequest: false,
      isUpdatePasswordSuccess: true,
      successMessage: payload.data,
    }),
    [updatePasswordFailure]: (state, { payload }) => ({
      ...state,
      isUpdatePasswordRequest: false,
      isUpdatePasswordFailure: true,
      errorMessage: payload,
    }),

    [updatePhotoRequest]: (state) => ({
      ...state,
      isUpdatePhotoRequest: true,
      isUpdatePhotoSuccess: false,
      isUpdatePhotoFailure: false,
    }),
    [updatePhotoSuccess]: (state, { payload }) => ({
      ...state,
      isUpdatePhotoRequest: false,
      isUpdatePhotoSuccess: true,
      account: payload.data,
    }),
    [updatePhotoFailure]: (state, { payload }) => ({
      ...state,
      isUpdatePhotoRequest: false,
      isUpdatePhotoFailure: true,
      errorMessage: payload,
    }),

    [deletePhotoRequest]: (state) => ({
      ...state,
      isDeletePhotoRequest: true,
      isDeletePhotoSuccess: false,
      isDeletePhotoFailure: false,
    }),
    [deletePhotoSuccess]: (state, { payload }) => ({
      ...state,
      isDeletePhotoRequest: false,
      isDeletePhotoSuccess: true,
      successMessage: payload.data,
    }),
    [deletePhotoFailure]: (state, { payload }) => ({
      ...state,
      isDeletePhotoRequest: false,
      isDeletePhotoFailure: true,
      errorMessage: payload,
    }),
  },
  initialState
);

export default accountReducer;
