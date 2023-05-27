import { createAction } from "redux-actions";

export const getAccountRequest = createAction("GET_ACCOUNT_REQUEST");
export const getAccountSuccess = createAction("GET_ACCOUNT_SUCCESS");
export const getAccountFailure = createAction("GET_ACCOUNT_FAILURE");

export const updateNameRequest = createAction("UPDATE_NAME_REQUEST");
export const updateNameSuccess = createAction("UPDATE_NAME_SUCCESS");
export const updateNameFailure = createAction("UPDATE_NAME_FAILURE");

export const updatePasswordRequest = createAction("UPDATE_PASSWORD_REQUEST");
export const updatePasswordSuccess = createAction("UPDATE_PASSWORD_SUCCESS");
export const updatePasswordFailure = createAction("UPDATE_PASSWORD_FAILURE");

export const updatePhotoRequest = createAction("UPDATE_PHOTO_REQUEST");
export const updatePhotoSuccess = createAction("UPDATE_PHOTO_SUCCESS");
export const updatePhotoFailure = createAction("UPDATE_PHOTO_FAILURE");

export const deletePhotoRequest = createAction("DELETE_PHOTO_REQUEST");
export const deletePhotoSuccess = createAction("DELETE_PHOTO_SUCCESS");
export const deletePhotoFailure = createAction("DELETE_PHOTO_FAILURE");
