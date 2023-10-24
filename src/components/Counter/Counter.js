import React, { useState, useEffect } from 'react';
import './Counter.scss';

function Counter({ initialValue, targetValue, unit }) {
  const [count, setCount] = useState(initialValue);

  useEffect(() => {
    if (count < targetValue) {
      const interval = setInterval(() => {
        setCount(count + 10);
      }, 1);

      return () => {
        clearInterval(interval);
      };
    }
  }, [count, targetValue]);

  return (
    <p className="Counter">
      {count}
      <span>&nbsp;{unit}</span>
    </p>
  );
}

export default Counter;
