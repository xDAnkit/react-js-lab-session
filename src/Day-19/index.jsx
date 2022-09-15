import { useDispatch, useSelector } from "react-redux";
import { DECREMENT, INCREMENT } from "./action";

const ReduxDay2 = () => {
  const selector = useSelector((state) => {
    console.log(state);
    return state.counterReducer;
  });

  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ type: INCREMENT });
  };
  const decrement = () => {
    dispatch({ type: DECREMENT });
  };

  console.log("@AJ selector: ", selector);
  return (
    <>
      <p>Welcome to Redux {selector}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
};

export default ReduxDay2;
