import style from "./style.module.css";

function Keyboard({ children }) {
  return <div className={style.keyboard}>{children}</div>;
}

export default Keyboard;
