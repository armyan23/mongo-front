import { createAction } from "redux-actions";

export const getAccountRequest = createAction("GET_ACCOUNT_REQUEST");
export const getAccountSuccess = createAction("GET_ACCOUNT_SUCCESS");
export const getAccountFailure = createAction("GET_ACCOUNT_FAILURE");
