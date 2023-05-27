import { call, put, takeLatest } from "redux-saga/effects";
import {
  getAccountRequest,
  getAccountSuccess,
  getAccountFailure,
  updateNameRequest,
  updateNameSuccess,
  updateNameFailure,
  updatePasswordRequest,
  updatePasswordSuccess,
  updatePasswordFailure,
  updatePhotoRequest,
  updatePhotoSuccess,
  updatePhotoFailure,
  deletePhotoRequest,
  deletePhotoSuccess,
  deletePhotoFailure,
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

function* updateName() {
  try {
    const response = yield call(() => instance.patch("/api/account/name"));

    if (response?.status === 200) {
      yield put(updateNameSuccess(response.data));
    } else {
      yield put(updateNameFailure(response?.response?.data?.message));
    }
  } catch (err) {
    yield put(updateNameFailure(err.response?.data?.message));
  }
}

function* updatePassword() {
  try {
    const response = yield call(() => instance.patch("/api/account/password"));

    if (response?.status === 200) {
      yield put(updatePasswordSuccess(response.data));
    } else {
      yield put(updatePasswordFailure(response?.response?.data?.message));
    }
  } catch (err) {
    yield put(updatePasswordFailure(err.response?.data?.message));
  }
}

function* updatePhoto({ payload }) {
  try {
    const response = yield call(() =>
      instance.patch("/api/account/photo", payload)
    );

    if (response?.status === 200) {
      yield put(updatePhotoSuccess(response.data));
    } else {
      yield put(updatePhotoFailure(response?.response?.data?.message));
    }
  } catch (err) {
    yield put(updatePhotoFailure(err.response?.data?.message));
  }
}

function* deletePhoto() {
  try {
    const response = yield call(() => instance.delete("/api/account/photo"));

    if (response?.status === 200) {
      yield put(deletePhotoSuccess(response.data));
    } else {
      yield put(deletePhotoFailure(response?.response?.data?.message));
    }
  } catch (err) {
    yield put(deletePhotoFailure(err.response?.data?.message));
  }
}

export default function* accountSaga() {
  yield takeLatest(getAccountRequest, getAccountData);
  yield takeLatest(updateNameRequest, updateName);
  yield takeLatest(updatePasswordRequest, updatePassword);
  yield takeLatest(updatePhotoRequest, updatePhoto);
  yield takeLatest(deletePhotoRequest, deletePhoto);
}
