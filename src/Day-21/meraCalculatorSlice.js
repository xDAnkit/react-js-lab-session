import { createSlice } from "@reduxjs/toolkit";

const fakeAPICall = async () => {
  return new Promise((reply, reject) => {
    setTimeout(() => {
      reply(true);
    }, 4000);
  });
};
const calculatorSlice = createSlice({
  name: "calculator",
  initialState: {
    result: 10,
  },
  reducers: {
    add: (state, actions) => {
      let count = 0;
      for (let i = 0; i < 900000000; i++) {
        console.log(i);
        count += i;
      }
      state.result = +actions.payload.num1 + +actions.payload.num2;
    },
    subtract: (state, actions) => {
      state.result = +actions.payload.num1 - +actions.payload.num2;
    },
  },
});

export const { add, subtract } = calculatorSlice.actions;

export default calculatorSlice.reducer;
