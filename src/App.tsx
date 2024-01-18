import {
  FormEvent,
  ReactElement,
  useContext,
  useEffect,
  useState,
} from "react";
import ClientContext from "./context/client";

import { StepOne } from "./components/step-one/index";
import { StepTwo } from "./components/step-two/index";
import { StepThree } from "./components/step-three/index";
import { StepFour } from "./components/step-four/index";
import { ThankYou } from "./components/thank-you";
import { NavBar } from "./components/nav-bar";
import StepContext from "./context/step";

function App() {
  const { client } = useContext(ClientContext);
  const { currentStep, next, back, isFirstStep, isLastStep, isFinished } =
    useContext(StepContext);
  const [missingValue, setMissingValue] = useState(false);

  const steps: ReactElement[] = [
    <StepOne missingValue={missingValue} setMissingValue={setMissingValue} />,
    <StepTwo />,
    <StepThree />,
    <StepFour />,
    <ThankYou />,
  ];

  const handleToNextStep = () => {
    if (
      (currentStep === 1 && client.name === "") ||
      client.email === "" ||
      client.phoneNumber === undefined
    ) {
      return setMissingValue(true);
    }
    return next();
  };
  const handleToPreviousStep = () => {
    if (currentStep > 1) return back();
  };

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (currentStep <= 4) return handleToNextStep();
    alert("Successful Account Creation");
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentStep]);
  return (
    <div className="flex h-full flex-col lg:flex-row lg:p-2">
      <NavBar currentStep={currentStep} />
      <main className="flex flex-col lg:max-h-[calc(100vh-1rem)] lg:flex-1 lg:overflow-y-auto">
        <form onSubmit={onSubmit}>
          <div className="mx-4 mb-[2.25rem] flex -translate-y-[4.5rem] flex-col rounded-md bg-neutral-White px-6 py-9 lg:mx-0 lg:mb-0 lg:h-full lg:-translate-y-0 lg:rounded-none lg:px-20 lg:py-0 lg:pt-16">
            {steps[currentStep]}
          </div>
          {!isFinished ? (
            <footer className="fixed bottom-0 flex w-full justify-between bg-neutral-White p-4 lg:sticky lg:h-full lg:items-end lg:px-20">
              {!isFirstStep && (
                <button
                  type="button"
                  onClick={() => handleToPreviousStep()}
                  className="text-sm font-bold text-neutral-CoolGray lg:h-fit"
                >
                  Go Back
                </button>
              )}
              <button
                type="submit"
                className={`lg:h-fit ${
                  isLastStep
                    ? "bg-primary-MarineBlue font-bold"
                    : "bg-primary-PurplishBlue hover:brightness-125"
                } ml-auto min-w-[128px] rounded-md p-3 text-sm text-neutral-White`}
              >
                {isLastStep ? "Next Step" : "Confirm"}
              </button>
            </footer>
          ) : null}
        </form>
      </main>
    </div>
  );
}

export default App;
