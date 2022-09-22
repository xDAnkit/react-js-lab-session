import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, subtract } from "./meraCalculatorSlice";

const MeraSliceComponent = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const calculatorState = useSelector((state) => state.meraCalculatorSlice);
  const dispatch = useDispatch();

  const dispatchAdd = () => {
    dispatch(add({ num1, num2 }));
  };
  const dispatchSubtract = () => {
    dispatch(subtract({ num1, num2 }));
  };

  return (
    <>
      <p>Counter: {calculatorState.result}</p>
      <input value={num1} onChange={(e) => setNum1(e.target.value)} />
      <input value={num2} onChange={(e) => setNum2(e.target.value)} />
      <button onClick={dispatchAdd}>Add</button>
      <button onClick={dispatchSubtract}>Subract</button>
    </>
  );
};

export default MeraSliceComponent;
