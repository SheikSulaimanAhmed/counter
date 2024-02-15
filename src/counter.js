import React, { useState } from "react";
import "./counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  return (
    <div className="counter-cont">
      <div className="counter-align">
        <h2>Counter Application</h2>
        <div>
          <button onClick={decrement}>-</button>
          <span>{count}</span>
          <button onClick={increment}>+</button>
        </div>
        <div>
          <p>
            {count === 0
              ? "The counter hasn't been changed."
              : `The counter has been changed to ${count}.`}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Counter;