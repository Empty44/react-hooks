import { useState } from "react";

export const useCounter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((value) => value++);
  };

  const decrement = () => {
    setCount((value) => value--);
  };

  return [count, increment, decrement];
};
