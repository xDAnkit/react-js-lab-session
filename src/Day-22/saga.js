import { put, takeLatest } from "redux-saga/effects";
import { addFailed, addSuccess } from "./sagaCalculatorSlice";

const fakeAPI = () => {
  return new Promise((reply, reject) => {
    setTimeout(() => {
      reply(true);
    }, 4000);
  });
};

function* addNumberAction(actions) {
  try {
    console.log("Inside Saga: ", actions);
    const { num1, num2 } = actions.payload;

    yield fakeAPI();

    const result = +num1 + +num2;
    console.log({ result });
    yield put(addSuccess({ result }));
    return;
  } catch (e) {
    yield put(addFailed());
  }
}

export function* watchAddNumberAction() {
  yield takeLatest("SagaCalculator/add", addNumberAction);
}
