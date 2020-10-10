import { useCallback, useEffect } from "react";

/*
 * @param {string} code Keycode for new browsers like keyA, keyR etc...
 * @param {() => void} handler KeyUp handler
 * @param {number} keyCode optional keycode for old browsers
 */
export const useKeyup = (
  code: string,
  handler: () => void,
  keyCode?: number
) => {
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (
      (code && event.code && event.code === code) ||
      (event.keyCode && event.keyCode === keyCode)
    ) {
      handler();
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keyup", handleKeyDown);
    return () => document.removeEventListener("keyup", handleKeyDown);
  }, []);
};
