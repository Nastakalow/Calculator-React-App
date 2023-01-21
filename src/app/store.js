import { configureStore } from "@reduxjs/toolkit";
import calculatorReducer from "../features/calculator/calculatorSlice";

export default configureStore({
  reducer: {
    calculator: calculatorReducer,
  },
});
