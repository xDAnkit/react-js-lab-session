import { delay, put, takeLatest } from "redux-saga/effects";
import { addFailed, addSuccess } from "./sagaCalculatorSlice";

const fakeAPI = () => {
  return new Promise((reply, reject) => {
    setTimeout(() => {
      reply(true);
    }, 4000);
  });
};

function* addNumberAction(actions) {
  console.log("@AJ Step 4 : Inside addNumberAction saga action");
  try {
    console.log("Inside Saga: ", actions);
    const { num1, num2 } = actions.payload;

    console.log("@AJ Step 4.1 : Starting delay of 4 sec inside saga");

    yield delay(2000);
    console.log("@AJ Step 4.2 : Completing delay of 4 sec inside saga");

    //yield fakeAPI();

    const result = +num1 + +num2;
    console.log({ result });
    console.log("@AJ Step 4.3 : Sending success action from saga");
    yield put(addSuccess({ result }));
    console.log("@AJ Step 4.4 : Sending success action from saga done");

    return;
  } catch (e) {
    console.log("@AJ Step 4.0.1 : Sending success action from saga failed");
    yield put(addFailed());
  }
}

export function* watchAddNumberAction() {
  yield takeLatest("SagaCalculator/add", addNumberAction);
}
