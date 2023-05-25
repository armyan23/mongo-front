import { all } from "redux-saga/effects";

import authSaga from "store/auth/saga";
import peopleSaga from "store/people/saga";

function* rootSaga() {
  yield all([authSaga(), peopleSaga()]);
}

export default rootSaga;
