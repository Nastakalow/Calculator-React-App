import { createSlice } from "@reduxjs/toolkit";

export const calculatorSlice = createSlice({
  name: "calculator",
  initialState: {
    left: [],
    right: [],
    operator: null,
    result: null,
  },
  reducers: {
    writeNumber: (state, action) => {
      if (state.operator === null) {
        state.left.push(action.payload);
      } else {
        state.right.push(action.payload);
      }
    },
    setOperator: (state, action) => {
      state.operator = action.payload;
    },
    erase: (state) => {
      state.left = [];
      state.right = [];
      state.operator = null;
      state.result = null;
    },
    calculate: (state, action) => {
      var left = state.left.join("");
      var right = state.right.join("");
      var result = null;
      switch (state.operator) {
        case "+":
          result = left + right;
          break;
        case "-":
          result = left - right;
          break;
        case "X":
          result = left * right;
          break;
        case "/":
          result = left / right;
          break;

        default:
          return state;
          break;
      }
      state.result = result;
    },
  },
});

export const { writeNumber, setOperator, erase, calculate } =
  calculatorSlice.actions;

export default calculatorSlice.reducer;
