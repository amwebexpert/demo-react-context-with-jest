import { useContext } from "react";
import { CounterContext } from "./counter";

export const useCounterContext = () => useContext(CounterContext);

export type CounterContextType = ReturnType<typeof useCounterContext>;
