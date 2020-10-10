import { useRef, useEffect } from "react";

export const usePrevious = (value: any) => {
  const previous = useRef();

  useEffect(() => {
    previous.current = value;
  }, [value]);

  return previous.current;
};
