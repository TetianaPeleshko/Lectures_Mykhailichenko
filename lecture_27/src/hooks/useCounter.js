import { useState } from 'react';

import './counter.scss';

// створення власного хука
function useCounter(initialValue = 0) {
  const [counter, setCounter] = useState(initialValue);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  const reset = () => {
    setCounter(0);
  };

  return { counter, increment, decrement, reset };
}

export default function Counter() {
  const { counter, increment, decrement, reset } = useCounter(0);

  return (
    <>
      <div
        className="card"
        style={{
          textAlign: 'center',
          width: 100,
          height: 50,
          fontSize: 18,
          marginRight: 15,
        }}
      >
        <div>{counter}</div>
        <button className="counter2" onClick={increment}>
          +
        </button>
        <button className="counter2" onClick={decrement}>
          -
        </button>
        <button className="counter2" onClick={reset}>
          x
        </button>
      </div>
    </>
  );
}
