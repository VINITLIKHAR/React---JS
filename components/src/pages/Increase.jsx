import React, { useState } from 'react'

const Increase = () => {
  const [count, setCount] = useState(0);

  function increase() {
    setCount((previousCount) => previousCount + 1);
  }

  return (
    <div>
      <p>{count}</p>
      <button onClick={increase}>Increase</button>
    </div>
  );
};

export default Increase;