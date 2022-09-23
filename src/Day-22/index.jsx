import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "./sagaCalculatorSlice";

const SagaCalculator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const state = useSelector((state) => state.sagaCalculatorSlice);
  const dispatch = useDispatch();

  const dispatchAddNumbers = () => {
    dispatch(add({ num1, num2 }));
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
