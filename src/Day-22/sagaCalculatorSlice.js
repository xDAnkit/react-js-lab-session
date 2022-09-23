import { createSlice } from "@reduxjs/toolkit";

const sagaCalculatorSlice = createSlice({
  name: "SagaCalculator",
  initialState: {
    result: 0,
    isFetching: false,
  },
  reducers: {
    add: (state, actions) => {
      console.log("LN11 action: ", actions);
      state.isFetching = true;
    },
    addSuccess: (state, actions) => {
      console.log("LN11 action 15 Success: ", actions);
      state.isFetching = false;
      state.result = actions.payload.result;
    },
    addFailed: (state, actions) => {
      state.isFetching = false;
    },
  },
});

export const { add, addSuccess, addFailed } = sagaCalculatorSlice.actions;

export default sagaCalculatorSlice.reducer;
