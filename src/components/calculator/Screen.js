import { useDispatch, useSelector } from "react-redux";
import style from "./style.module.css";

function Screen() {
  const { left, right, operator, result } = useSelector(
    (state) => state.calculator
  );

  if (result !== null) {
    return <div className={style.screen}>{result}</div>;
  }

  return (
    <div className={style.screen}>
      {left} {operator?.toUpperCase()} {right}
    </div>
  );
}

export default Screen;
