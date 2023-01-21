import style from "./style.module.css";

function Calculator({ children }) {
  return (
    <>
      <div className={style.calculator}>{children}</div>
    </>
  );
}

export default Calculator;
