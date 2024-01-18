import { createContext, useState } from "react";

type PropsStepContext = {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

type StepContextProviderProps = {
  children: React.ReactNode;
};

const DEFAULT_VALUE = {
  step: 1,
  setStep: () => {},
};

const StepContext = createContext<PropsStepContext>(DEFAULT_VALUE);

function StepContextProvider({ children }: StepContextProviderProps) {
  const [step, setStep] = useState(DEFAULT_VALUE.step);
  return (
    <StepContext.Provider
      value={{
        step,
        setStep,
      }}
    >
      {children}
    </StepContext.Provider>
  );
}

export { StepContextProvider };
export default StepContext;
