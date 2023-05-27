import { getPeopleRequest, getPeopleSuccess, getPeopleFailure } from "./action";
import { handleActions } from "redux-actions";

const initialState = {
  isGetPeopleRequest: false,
  isGetPeopleSuccess: false,
  isGetPeopleFailure: false,
  people: [],
  errorMessage: "",
};

const peopleReducer = handleActions(
  {
    [getPeopleRequest]: (state) => ({
      ...state,
      isGetPeopleRequest: true,
      isGetPeopleSuccess: false,
      isGetPeopleFailure: false,
    }),
    [getPeopleSuccess]: (state, { payload }) => ({
      ...state,
      isGetPeopleRequest: false,
      isGetPeopleSuccess: true,
      people: payload.data,
    }),
    [getPeopleFailure]: (state, { payload }) => ({
      ...state,
      isGetPeopleRequest: false,
      isGetPeopleFailure: true,
      errorMessage: payload,
    }),
  },
  initialState
);

export default peopleReducer;
