import { FC, PropsWithChildren, useCallback, useState } from "react";
import { CounterContext } from "./counter";

export const CounterProvider: FC<PropsWithChildren> = ({ children }) => {
  const [counter, setCounter] = useState(0);

  const increment = useCallback(() => setCounter(counter + 1), [counter]);
  const decrement = useCallback(() => setCounter(counter - 1), [counter]);

  return (
    <CounterContext.Provider value={{ counter, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
};