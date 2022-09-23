import { all, fork } from "redux-saga/effects";
import { watchAddNumberAction } from "../Day-22/saga";

export default function* rootSaga() {
  yield all([fork(watchAddNumberAction)]);
}
