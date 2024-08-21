import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./features/counter/counterSlice";
import { fetchTodo } from "./features/fetch/fetchSlice";

function App() {
  const count = useSelector((state) => state.counter.value);
  const { isloading, todos, isError } = useSelector((state) => state.fetch); // Accessing state.todo correctly
  console.log(isError, todos, isloading);
  const dispatch = useDispatch();
  return (
    <div className="app">
      <div className="counter">
        <h1>count : {count}</h1>
        <br />
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>{" "}
        <button
          aria-label="Increment value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>{" "}
      </div>
      <div className="todo">
        <button onClick={() => dispatch(fetchTodo())}>fetchTodos</button>
        {isloading && <h1>Loading.........</h1>}
        {todos &&
          todos.map((e) => {
            return <h1>{e.title}</h1>;
          })}
      </div>
    </div>
  );
}

export default App;
