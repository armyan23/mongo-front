import { call, put, takeLatest } from "redux-saga/effects";
import {
  getAccountRequest,
  getAccountSuccess,
  getAccountFailure,
} from "./action";

import instance from "config/instance";

function* getAccountData() {
  try {
    const response = yield call(() => instance.get("/api/account"));

    if (response?.status === 200) {
      yield put(getAccountSuccess(response.data));
    } else {
      yield put(getAccountFailure(response?.response?.data?.message));
    }
  } catch (err) {
    yield put(getAccountFailure(err.response?.data?.message));
  }
}

export default function* accountSaga() {
  yield takeLatest(getAccountRequest, getAccountData);
}
