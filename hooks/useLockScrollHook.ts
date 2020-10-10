import { useLayoutEffect } from "react";

export const useLockScroll = (elem: HTMLElement | null = null) => {
  useLayoutEffect(() => {
    if (elem === null) {
      elem = document.body;
    }
    const prevScrollState = elem.style.overflow;
    elem.style.overflow = "hidden";
    return () => (elem.style.overflow = prevScrollState);
  }, []);
};
