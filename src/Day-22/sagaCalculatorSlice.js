import { createSlice } from "@reduxjs/toolkit";

const sagaCalculatorSlice = createSlice({
  name: "SagaCalculator",
  initialState: {
    result: 0,
    isFetching: false,
  },
  reducers: {
    add: (state, actions) => {
      console.log("@AJ Step 2 : Inside add reducer");
      console.log("LN11 action: ", actions);
      state.isFetching = true;

      console.log("@AJ Step 3 : Inside add reducer completed");
    },
    addSuccess: (state, actions) => {
      console.log("@AJ Step 5 : Inside addSuccess reducer");
      state.isFetching = false;
      state.result = actions.payload.result;
      console.log("@AJ Step 5.1 : Inside addSuccess reducer completed");
    },
    addFailed: (state, actions) => {
      console.log("@AJ Step 6 : Inside addSuccess reducer failed");

      state.isFetching = false;
      console.log("@AJ Step 6 : Inside addSuccess reducer failed completed");
    },
  },
});

export const { add, addSuccess, addFailed } = sagaCalculatorSlice.actions;

export default sagaCalculatorSlice.reducer;
