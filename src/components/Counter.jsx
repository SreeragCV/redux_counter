import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";
import { counterActions } from "../store/counter";

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  function increaseHandler() {
    dispatch(counterActions.increase(10));
  }

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  if (isAuthenticated) {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        {show && <div className={classes.value}>{counter}</div>}
        <div>
          <button onClick={decrementHandler}>decrement</button>
          <button onClick={increaseHandler}>increase by 10</button>
          <button onClick={incrementHandler}>increment</button>
        </div>
        <button onClick={toggleCounterHandler}>Toggle Counter</button>
      </main>
    );
  } else if (!isAuthenticated) {
    return <></>;
  }
};

export default Counter;
