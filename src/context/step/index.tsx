import { createContext, useState } from "react";

type PropsStepContext = {
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  next: () => void;
  back: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
  isFinished: boolean;
};

type StepContextProviderProps = {
  children: React.ReactNode;
};

const DEFAULT_VALUE = {
  currentStep: 0,
  setCurrentStep: () => {},
  next: () => {},
  back: () => {},
  isFirstStep: false,
  isLastStep: false,
  isFinished: false,
};

const StepContext = createContext<PropsStepContext>(DEFAULT_VALUE);

function StepContextProvider({ children }: StepContextProviderProps) {
  const [currentStep, setCurrentStep] = useState(DEFAULT_VALUE.currentStep);

  const next = () => {
    setCurrentStep((previousStep) => {
      return previousStep + 1;
    });
  };
  const back = () => {
    setCurrentStep((previousStep) => {
      return previousStep - 1;
    });
  };

  return (
    <StepContext.Provider
      value={{
        currentStep,
        setCurrentStep,
        back,
        next,
        isFirstStep: currentStep === 0,
        isLastStep: currentStep === 3,
        isFinished: currentStep === 4,
      }}
    >
      {children}
    </StepContext.Provider>
  );
}

export { StepContextProvider };
export default StepContext;
