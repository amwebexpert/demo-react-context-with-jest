import { createContext } from "react";

export type NoopType = () => void;
export const NOOP: NoopType = () => {};

export type CounterContextType = {
  counter: number;
  increment: NoopType;
  decrement: NoopType;
};

export const CounterContext = createContext<CounterContextType>({
  counter: 0,
  increment: NOOP,
  decrement: NOOP,
});
