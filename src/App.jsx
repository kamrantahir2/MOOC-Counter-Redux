import { useReducer } from "react";
import "./App.css";
import CounterContext from "./CounterContext";
import { useContext } from "react";
import { useCounterDispatch } from "./CounterContext";
import { useCounterValue } from "./CounterContext";

const Display = () => {
  const counter = useCounterValue();
  return <div>{counter}</div>;
};

const Button = ({ type, label }) => {
  const dispatch = useCounterDispatch();
  return <button onClick={() => dispatch({ type })}>{label}</button>;
};

function App() {
  return (
    <div>
      <Display />
      <div>
        <Button type="INC" label={"+"} />
        <Button type="DEC" label={"-"} />
        <Button type="ZERO" label={"0"} />
      </div>
    </div>
  );
}

export default App;
