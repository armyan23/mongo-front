import { call, put, takeLatest } from "redux-saga/effects";
import { getPeopleRequest, getPeopleSuccess, getPeopleFailure } from "./action";

import instance from "config/instance";

function* getPeople() {
  try {
    const response = yield call(() => instance.get("/api/account"));

    if (response?.status === 200) {
      yield put(getPeopleSuccess(response.data));
    } else {
      yield put(getPeopleFailure(response?.response?.data?.message));
    }
  } catch (err) {
    yield put(getPeopleFailure(err.response?.data?.message));
  }
}

export default function* peopleSaga() {
  yield takeLatest(getPeopleRequest, getPeople);
}
