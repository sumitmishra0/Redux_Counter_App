import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "./store/store";
export default function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(actions.increment(1));
  };

  const decrement = () => {
    dispatch(actions.decrement(1));
  };
  const addBy = (payload) => {
    dispatch(actions.addBy(20));
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
