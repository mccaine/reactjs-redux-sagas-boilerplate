import { takeLatest, call, put, all, delay, select } from "redux-saga/effects";
import { push } from "connected-react-router";
import { globalTypes } from "./constants";
import { globalProcessing } from "./actions";

function* testSaga() {
  try {
    yield put(globalProcessing(true));
    yield delay(3600);
  } catch (err) {
    yield put(globalProcessing(false));
  } finally {
    yield put(globalProcessing(false));
  }
}

export default function* watchGlobal() {
  yield all([takeLatest(globalTypes.TEST, testSaga)]);
}
