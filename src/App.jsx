import { useReducer } from "react";

export const counterReducer = (state, action) => {
  if (action.type === "INCREMENT") {
    return { count: state.count + 1 };
  }
  if (action.type === "DECREMENT") {
    return { count: state.count - 1 };
  }
  if (action.type === "Reset") {
    return { count: 0 };
  }
  return state;
};

function App() {
  const [counterState, dispatch] = useReducer(counterReducer, {
    count: 0,
  });
  const handleIncrement = () => {
    dispatch({
      type: "INCREMENT",
    });
  };
  const handleDecrement = () => {
    dispatch({
      type: "DECREMENT",
    });
  };
  const handleReset = () => {
    dispatch({
      type: "Reset",
    });
  };
  return (
    <div id="app">
      <h1>The (Final?) Counter</h1>
      <p id="actions">
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
      </p>
      <p id="counter">{counterState.count}</p>
    </div>
  );
}

export default App;
