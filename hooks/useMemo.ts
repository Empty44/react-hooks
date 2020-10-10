import React, { useEffect, useState } from "react";

export const useMemo = (handler: () => any, value: any[]) => {
  const [result, setResult] = useState();
  useEffect(() => {
    setResult(handler());
  }, value);
  return result;
};
