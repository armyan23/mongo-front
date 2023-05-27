import { all } from "redux-saga/effects";

import authSaga from "store/auth/saga";
import accountSaga from "@/store/account/saga";
import peopleSaga from "store/people/saga";

function* rootSaga() {
  yield all([authSaga(), accountSaga(), peopleSaga()]);
}

export default rootSaga;
