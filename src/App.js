import { Calculator, Screen, Keyboard, Key } from "./components/calculator";

function App() {
  return (
    <>
      <Calculator>
        <Screen />
        <Keyboard>
          <Key value={7} type="number" />
          <Key value={8} type="number" />
          <Key value={9} type="number" />
          <Key value={"c"} type="operator" />
          <Key value={4} type="number" />
          <Key value={5} type="number" />
          <Key value={6} type="number" />
          <Key value={"x"} type="operator" />
          <Key value={1} type="number" />
          <Key value={2} type="number" />
          <Key value={3} type="number" />
          <Key value={"-"} type="operator" />
          <Key value={0} type="number" />
          <Key value={"/"} type="operator" />
          <Key value={"="} type="operator" />
          <Key value={"+"} type="operator" />
        </Keyboard>
      </Calculator>
    </>
  );
}

export default App;
