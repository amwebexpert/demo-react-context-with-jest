import { FC, PropsWithChildren, useCallback, useState } from "react";
import { CounterContext } from "./counter";

type Props = PropsWithChildren & {
  initialCounter?: number;
};

export const CounterProvider: FC<Props> = ({ initialCounter = 0, children }) => {
  const [counter, setCounter] = useState(initialCounter);

  const increment = useCallback(() => setCounter(counter + 1), [counter]);
  const decrement = useCallback(() => setCounter(counter - 1), [counter]);

  return (
    <CounterContext.Provider value={{ counter, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
};