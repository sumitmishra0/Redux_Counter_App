import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
export default function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ type: "INC" });
  };

  const decrement = () => {
    dispatch({ type: "DEC" });
  };
  const addBy = (payload) => {
    dispatch({ type: "ADDBY", payload: payload });
  };
  return (
    <div className="App">
      <h1>Counter : {counter} </h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={() => increment()}>Increment</button>
      <button onClick={() => decrement()}>Decrement</button>
      <button onClick={() => addBy(10)}> ADD By 10</button>
    </div>
  );
}
