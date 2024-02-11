import { createContext } from "react";

export type CounterContextType = {
  counter: number;
  increment: () => void;
  decrement: () => void;
};

export const CounterContext = createContext<CounterContextType>({
  counter: 0,
  increment: () => {},
  decrement: () => {},
});
