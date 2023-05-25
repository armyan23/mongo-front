import { createAction } from "redux-actions";

export const getPeopleRequest = createAction("GET_PEOPLE_REQUEST");
export const getPeopleSuccess = createAction("GET_PEOPLE_SUCCESS");
export const getPeopleFailure = createAction("GET_PEOPLE_FAILURE");
