import { call, put, takeLatest } from "redux-saga/effects";
import {
  signUpRequest,
  signUpSuccess,
  signUpFailure,
  authenticatedRequest,
  authenticatedSuccess,
  authenticatedFailure,
} from "./action";

import instance from "config/instance";

function* signUp({ payload }) {
  try {
    const response = yield call(() =>
      instance.post("/api/auth/register", payload)
    );

    if (response?.status === 200) {
      yield put(signUpSuccess(response.data.message));
    } else {
      yield put(signUpFailure(response?.response?.data?.message));
    }
  } catch (err) {
    yield put(signUpFailure(err.response?.data?.message));
  }
}

function* authenticated({ payload }) {
  try {
    const response = yield call(() =>
      instance.get("/api/authenticated", {
        headers: {
          authorization: payload,
        },
      })
    );

    if (response?.status === 200) {
      yield put(authenticatedSuccess(response.data));
    } else {
      yield put(authenticatedFailure());
    }
  } catch (err) {
    yield put(authenticatedFailure());
  }
}

export default function* authSaga() {
  yield takeLatest(signUpRequest, signUp);
  yield takeLatest(authenticatedRequest, authenticated);
}
