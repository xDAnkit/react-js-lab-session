import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "./sagaCalculatorSlice";

const SagaCalculator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const state = useSelector((state) => state.sagaCalculatorSlice);
  const dispatch = useDispatch();

  console.log("@AJ Step 7 : Reducer state: ", state);

  const dispatchAddNumbers = () => {
    console.log("@AJ Step 1 : Dispatching dispatchAddNumbers request");
    dispatch(add({ num1, num2 }));
    console.log("@AJ Step 1.1 : Dispatching dispatchAddNumbers request done");
  };
  return (
    <>
      <p>{state.isFetching ? "Loading" : state.result}</p>
      <button onClick={dispatchAddNumbers}>Add</button>
      <div>
        <input
          type="text"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
      </div>
    </>
  );
};

export default SagaCalculator;
