import style from "./style.module.css";
import { useCallback } from "react";
import {
  writeNumber,
  setOperator,
  erase,
  calculate,
} from "../../features/calculator/calculatorSlice";
import { useDispatch } from "react-redux";

function Key({ value, type }) {
  const dispatch = useDispatch();

  const onClick = useCallback(() => {
    if (type === "operator" && value == "C") {
      dispatch(erase());
    } else if (type === "operator" && value === "=") {
      dispatch(calculate(value));
    } else if (type != "number") {
      dispatch(setOperator(value));
    } else {
      dispatch(writeNumber(value));
    }
  });

  return (
    <button onClick={onClick} className={style.key}>
      {value}
    </button>
  );
}

export default Key;
