import { DECREMENT, INCREMENT } from "./action";

const initialState = {
  counter: 10,
};

const CounterReducer = (state = 10, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

export default CounterReducer;
