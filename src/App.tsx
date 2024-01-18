import { useContext, useEffect, useState } from "react";
import bgSidebarMobile from "/assets/images/bg-sidebar-mobile.svg";
import bgSidebarDesktop from "/assets/images/bg-sidebar-desktop.svg";
import { StepOne } from "./components/step-one/index";
import { StepTwo } from "./components/step-two/index";
import { StepThree } from "./components/step-three/index";
import { StepFour } from "./components/step-four/index";
import { ThankYou } from "./components/thank-you";

import { useWindowSize } from "./hooks/useWindowSize";
import ClientContext from "./context/client";
import StepContext from "./context/step";

function App() {
  const { client, setClient } = useContext(ClientContext);
  const { step, setStep } = useContext(StepContext);
  const { width } = useWindowSize();

  const [thankYou, setThankYou] = useState(false);
  const [missingValue, setMissingValue] = useState(false);

  const handleToNextStep = () => {
    if (
      (step === 1 && client.name === "") ||
      client.email === "" ||
      client.phoneNumber === undefined
    ) {
      return setMissingValue(true);
    }
    if (step < 4) return setStep(step + 1);
  };
  const handleToPreviousStep = () => {
    if (step > 1) return setStep(step - 1);
  };

  const handleThankYou = () => {
    setThankYou(!thankYou);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [step, thankYou]);
  return (
    <div className="flex h-full flex-col lg:flex-row lg:p-2">
      <nav className="relative w-full lg:h-[calc(100vh-1rem)] lg:w-auto">
        {width && width >= 1024 ? (
          <img className="h-full w-fit" src={bgSidebarDesktop} alt="" />
        ) : (
          <img className="w-full" src={bgSidebarMobile} alt="" />
        )}
        <div className="absolute top-8 flex w-full justify-center gap-4 lg:left-8 lg:flex-col lg:justify-normal ">
          <div
            className={`flex select-none items-center justify-center lg:w-full lg:justify-normal lg:gap-3`}
          >
            <span
              className={`flex h-8 w-8 items-center justify-center rounded-full ${
                step === 1
                  ? "bg-primary-LightBlue"
                  : "border border-neutral-Alabaster text-neutral-Alabaster"
              } font-medium`}
            >
              1
            </span>
            {width && width >= 1024 ? (
              <div className="flex flex-col">
                <span className="text-sm text-neutral-LightGray">STEP 1</span>
                <span className="text-sm text-neutral-White">YOUR INFO</span>
              </div>
            ) : null}
          </div>
          <div
            className={`flex select-none items-center justify-center lg:w-full lg:justify-normal lg:gap-3`}
          >
            <span
              className={`flex h-8 w-8 items-center justify-center rounded-full ${
                step === 2
                  ? "bg-primary-LightBlue"
                  : "border border-neutral-Alabaster text-neutral-Alabaster"
              } font-medium`}
            >
              2
            </span>
            {width && width >= 1024 ? (
              <div className="flex flex-col">
                <span className="text-sm text-neutral-LightGray">STEP 2</span>
                <span className="text-sm text-neutral-White">SELECT PLAN</span>
              </div>
            ) : null}
          </div>
          <div
            className={`flex select-none items-center justify-center lg:w-full lg:justify-normal lg:gap-3`}
          >
            <span
              className={`flex h-8 w-8 items-center justify-center rounded-full ${
                step === 3
                  ? "bg-primary-LightBlue"
                  : "border border-neutral-Alabaster text-neutral-Alabaster"
              } font-medium`}
            >
              3
            </span>
            {width && width >= 1024 ? (
              <div className="flex flex-col">
                <span className="text-sm text-neutral-LightGray">STEP 3</span>
                <span className="text-sm text-neutral-White">ADD-ONS</span>
              </div>
            ) : null}
          </div>
          <div
            className={`flex select-none items-center justify-center lg:w-full lg:justify-normal lg:gap-3`}
          >
            <span
              className={`flex h-8 w-8 items-center justify-center rounded-full ${
                step === 4
                  ? "bg-primary-LightBlue"
                  : "border border-neutral-Alabaster text-neutral-Alabaster"
              } font-medium`}
            >
              4
            </span>
            {width && width >= 1024 ? (
              <div className="flex flex-col">
                <span className="text-sm text-neutral-LightGray">STEP 4</span>
                <span className="text-sm text-neutral-White">SUMMARY</span>
              </div>
            ) : null}
          </div>
        </div>
      </nav>
      <div className="flex flex-col lg:max-h-[calc(100vh-1rem)] lg:flex-1 lg:overflow-y-auto">
        <main className="mx-4 mb-[2.25rem] flex -translate-y-[4.5rem] flex-col rounded-md bg-neutral-White px-6 py-9 lg:mx-0 lg:mb-0 lg:h-full lg:-translate-y-0 lg:rounded-none lg:px-20 lg:py-0 lg:pt-16">
          {step === 1 && !thankYou ? (
            <StepOne
              missingValue={missingValue}
              setMissingValue={setMissingValue}
              client={client}
              setClient={setClient}
            />
          ) : step === 2 && !thankYou ? (
            <StepTwo client={client} setClient={setClient} />
          ) : step === 3 && !thankYou ? (
            <StepThree client={client} setClient={setClient} />
          ) : step === 4 && !thankYou ? (
            <StepFour setStep={setStep} client={client} />
          ) : null}
          {thankYou ? <ThankYou /> : null}
        </main>
        {!thankYou ? (
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
              onClick={() => {
                if (step < 4) return handleToNextStep();
                handleThankYou();
              }}
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
      </div>
    </div>
  );
}

export default App;
