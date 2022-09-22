import { createSlice } from "@reduxjs/toolkit";

const calculatorSlice = createSlice({
  name: "calculator",
  initialState: {
    result: 10,
  },
  reducers: {
    add: (state, actions) => {
      state.result = +actions.payload.num1 + +actions.payload.num2;
    },
    subtract: (state, actions) => {
      state.result = +actions.payload.num1 - +actions.payload.num2;
    },
  },
});

export const { add, subtract } = calculatorSlice.actions;

export default calculatorSlice.reducer;
