import { useEffect, useState } from "react";
import bgSidebarMobile from "/assets/images/bg-sidebar-mobile.svg";
import bgSidebarDesktop from "/assets/images/bg-sidebar-desktop.svg";
import { StepOne } from "./components/StepOne";
import { StepTwo } from "./components/StepTwo";
import { StepThree } from "./components/StepThree";
import { StepFour } from "./components/StepFour";
import { ThankYou } from "./components/ThankYou";
import { Client } from "./types/Client";

import { useWindowSize } from "./hooks/useWindowSize";

function App() {
  const { width } = useWindowSize();
  const [client, setClient] = useState<Client>({
    name: "",
    email: "",
    phoneNumber: undefined,
    plan: {
      name: "Arcade",
      price: 9,
    },
    planType: 0,
    addons: [],
  });
  const [thankYou, setThankYou] = useState(false);
  const [step, setStep] = useState(1);
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
    <div className="flex flex-col lg:flex-row min-h-screen">
      <nav className="relative w-full lg:w-auto lg:h-screen">
        {width && width >= 1024 ? (
          <img className="w-fit h-full" src={bgSidebarDesktop} alt="" />
        ) : (
          <img className="w-full" src={bgSidebarMobile} alt="" />
        )}
        <div className="absolute justify-center lg:justify-normal top-8 lg:left-8 flex lg:flex-col gap-4 w-full ">
          <div
            className={`flex lg:gap-3 items-center lg:justify-normal justify-center select-none lg:w-full`}
          >
            <span
              className={`h-8 w-8 rounded-full justify-center flex items-center ${
                step === 1
                  ? "bg-primary-LightBlue"
                  : "text-neutral-Alabaster border border-neutral-Alabaster"
              } font-medium`}
            >
              1
            </span>
            {width && width >= 1024 ? (
              <div className="flex flex-col">
                <span className="text-neutral-LightGray text-sm">STEP 1</span>
                <span className="text-neutral-White text-sm">YOUR INFO</span>
              </div>
            ) : null}
          </div>
          <div
            className={`flex lg:gap-3 items-center lg:justify-normal justify-center select-none lg:w-full`}
          >
            <span
              className={`h-8 w-8 rounded-full justify-center flex items-center ${
                step === 2
                  ? "bg-primary-LightBlue"
                  : "text-neutral-Alabaster border border-neutral-Alabaster"
              } font-medium`}
            >
              2
            </span>
            {width && width >= 1024 ? (
              <div className="flex flex-col">
                <span className="text-neutral-LightGray text-sm">STEP 2</span>
                <span className="text-neutral-White text-sm">SELECT PLAN</span>
              </div>
            ) : null}
          </div>
          <div
            className={`flex lg:gap-3 items-center lg:justify-normal justify-center select-none lg:w-full`}
          >
            <span
              className={`h-8 w-8 rounded-full justify-center flex items-center ${
                step === 3
                  ? "bg-primary-LightBlue"
                  : "text-neutral-Alabaster border border-neutral-Alabaster"
              } font-medium`}
            >
              3
            </span>
            {width && width >= 1024 ? (
              <div className="flex flex-col">
                <span className="text-neutral-LightGray text-sm">STEP 3</span>
                <span className="text-neutral-White text-sm">ADD-ONS</span>
              </div>
            ) : null}
          </div>
          <div
            className={`flex lg:gap-3 items-center lg:justify-normal justify-center select-none lg:w-full`}
          >
            <span
              className={`h-8 w-8 rounded-full justify-center flex items-center ${
                step === 4
                  ? "bg-primary-LightBlue"
                  : "text-neutral-Alabaster border border-neutral-Alabaster"
              } font-medium`}
            >
              4
            </span>
            {width && width >= 1024 ? (
              <div className="flex flex-col">
                <span className="text-neutral-LightGray text-sm">STEP 4</span>
                <span className="text-neutral-White text-sm">SUMMARY</span>
              </div>
            ) : null}
          </div>
        </div>
      </nav>
      <div className="flex flex-col lg:flex-1 lg:max-h-screen lg:overflow-y-auto">
        <main className="flex flex-col lg:mx-0 lg:h-full lg:px-20 lg:py-0 lg:pt-16 py-9 px-6 bg-neutral-White mx-4 rounded-md -translate-y-[4.5rem] lg:-translate-y-0">
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
          <footer className="sticky bottom-0 w-full lg:items-end lg:px-20 lg:h-full flex justify-between p-4 bg-neutral-White">
            {step > 1 ? (
              <button
                onClick={() => handleToPreviousStep()}
                className="lg:h-fit text-sm font-bold text-neutral-CoolGray"
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
              } text-neutral-White min-w-[128px] rounded-md p-3 text-sm ml-auto`}
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
