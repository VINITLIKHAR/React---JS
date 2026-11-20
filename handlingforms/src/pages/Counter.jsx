import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Count: {count}</h2>

      <CounterButton onIncrease={increaseCount} />
    </div>
  );
}

function CounterButton({ onIncrease }) {
  return (
    <button onClick={onIncrease}>
      Increase
    </button>
  );
}

export default Counter;