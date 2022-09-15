import { useDispatch, useSelector } from "react-redux";
import { DECREMENT, INCREMENT } from "./action";
import ReduxDay19V2 from "./index-v2";

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
      <ReduxDay19V2 />
      <ReduxDay19V2 />
      <ReduxDay19V2 />
      <ReduxDay19V2 />
      <ReduxDay19V2 />
      <ReduxDay19V2 />
      <ReduxDay19V2 />
      <ReduxDay19V2 />
      <ReduxDay19V2 />
      <ReduxDay19V2 />
      <ReduxDay19V2 />
      <ReduxDay19V2 />
      <ReduxDay19V2 />
      <ReduxDay19V2 />
      <ReduxDay19V2 />
      <ReduxDay19V2 />
    </>
  );
};

export default ReduxDay2;
