import { call, put, takeLatest } from "redux-saga/effects";
import {
  signUpRequest,
  signUpSuccess,
  signUpFailure,
  signInRequest,
  signInSuccess,
  signInFailure,
  authenticatedRequest,
  authenticatedSuccess,
  authenticatedFailure,
} from "./action";

import instance, { handleHeaders } from "config/instance";

function* signUp({ payload }) {
  try {
    const response = yield call(() => instance.post("/api/sign-up", payload));

    if (response?.status === 200) {
      yield put(signUpSuccess(response.data));
    } else {
      yield put(signUpFailure(response?.response?.data?.message));
    }
  } catch (err) {
    yield put(signUpFailure(err.response?.data?.message));
  }
}

function* signIn({ payload }) {
  try {
    const response = yield call(() => instance.post("/api/sign-in", payload));

    if (response?.status === 200) {
      handleHeaders(response.data.data);

      yield put(signInSuccess(response.data));
    } else {
      yield put(signInFailure(response?.response?.data?.message));
    }
  } catch (err) {
    yield put(signInFailure(err.response?.data?.message));
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
  yield takeLatest(signInRequest, signIn);
  yield takeLatest(authenticatedRequest, authenticated);
}
