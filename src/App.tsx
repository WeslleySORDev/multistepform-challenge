import { useContext, useEffect, useState } from "react";
import ClientContext from "./context/client";
import StepContext from "./context/step";

import { StepOne } from "./components/step-one/index";
import { StepTwo } from "./components/step-two/index";
import { StepThree } from "./components/step-three/index";
import { StepFour } from "./components/step-four/index";
import { ThankYou } from "./components/thank-you";
import { NavBar } from "./components/nav-bar";

function App() {
  const { client } = useContext(ClientContext);
  const { step, setStep } = useContext(StepContext);
  const [missingValue, setMissingValue] = useState(false);
  const handleToNextStep = () => {
    if (
      (step === 1 && client.name === "") ||
      client.email === "" ||
      client.phoneNumber === undefined
    ) {
      return setMissingValue(true);
    }
    return setStep(step + 1);
  };
  const handleToPreviousStep = () => {
    if (step > 1) return setStep(step - 1);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [step]);
  return (
    <div className="flex h-full flex-col lg:flex-row lg:p-2">
      <NavBar />
      <main className="flex flex-col lg:max-h-[calc(100vh-1rem)] lg:flex-1 lg:overflow-y-auto">
        <form>
          <div className="mx-4 mb-[2.25rem] flex -translate-y-[4.5rem] flex-col rounded-md bg-neutral-White px-6 py-9 lg:mx-0 lg:mb-0 lg:h-full lg:-translate-y-0 lg:rounded-none lg:px-20 lg:py-0 lg:pt-16">
            {step === 1 ? (
              <StepOne
                missingValue={missingValue}
                setMissingValue={setMissingValue}
              />
            ) : step === 2 ? (
              <StepTwo />
            ) : step === 3 ? (
              <StepThree />
            ) : step === 4 ? (
              <StepFour />
            ) : (
              <ThankYou />
            )}
          </div>
          {step <= 4 ? (
            <footer className="fixed bottom-0 flex w-full justify-between bg-neutral-White p-4 lg:sticky lg:h-full lg:items-end lg:px-20">
              {step > 1 ? (
                <button
                  onClick={() => handleToPreviousStep()}
                  className="text-sm font-bold text-neutral-CoolGray lg:h-fit"
                >
                  Go Back
                </button>
              ) : null}
              <button
                onClick={() => step <= 4 && handleToNextStep()}
                className={`lg:h-fit ${
                  step < 4
                    ? "bg-primary-MarineBlue font-bold"
                    : "bg-primary-PurplishBlue hover:brightness-125"
                } ml-auto min-w-[128px] rounded-md p-3 text-sm text-neutral-White`}
              >
                {step < 4 ? "Next Step" : "Confirm"}
              </button>
            </footer>
          ) : null}
        </form>
      </main>
    </div>
  );
}

export default App;
