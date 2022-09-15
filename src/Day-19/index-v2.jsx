import { useSelector } from "react-redux";

const ReduxDay19V2 = () => {
  const selector = useSelector((state) => state.counterReducer);

  return <p>Counter : {selector}</p>;
};

export default ReduxDay19V2;
