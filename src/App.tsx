import { useState } from "react";
import bgSidebarMobile from "/assets/images/bg-sidebar-mobile.svg";
import { StepOne } from "./components/StepOne";
import { StepTwo } from "./components/StepTwo";
import { StepThree } from "./components/StepThree";
import { StepFour } from "./components/StepFour";
import { ThankYou } from "./components/ThankYou";
import { Client } from "./types/Client";

function App() {
  const [client, setClient] = useState<Client>({
    name: "",
    email: "",
    phoneNumber: "",
    plan: {
      name: "Arcade",
      price: 9,
    },
    planType: 0,
    addons: [],
  });
  const [thankYou, setThankYou] = useState(false);
  const [step, setStep] = useState(1);

  const handleToNextStep = () => {
    if (step < 4) setStep(step + 1);
  };
  const handleToPreviousStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleThankYou = () => {
    setThankYou(!thankYou);
  };
  return (
    <div className="flex flex-col min-h-screen">
      <nav className="relative w-full">
        <img className="w-full" src={bgSidebarMobile} alt="" />
        <div className="absolute top-8 flex gap-4 w-full items-center justify-center mx-auto">
          <button
            className={`${
              step === 1
                ? "bg-primary-LightBlue"
                : "text-neutral-Alabaster border border-neutral-Alabaster"
            } font-medium h-8 w-8 rounded-full`}
          >
            1
          </button>
          <button
            className={`${
              step === 2
                ? "bg-primary-LightBlue"
                : "text-neutral-Alabaster border border-neutral-Alabaster"
            } font-medium h-8 w-8 rounded-full`}
          >
            2
          </button>
          <button
            className={`${
              step === 3
                ? "bg-primary-LightBlue"
                : "text-neutral-Alabaster border border-neutral-Alabaster"
            } font-medium h-8 w-8 rounded-full`}
          >
            3
          </button>
          <button
            className={`${
              step === 4
                ? "bg-primary-LightBlue"
                : "text-neutral-Alabaster border border-neutral-Alabaster"
            } font-medium h-8 w-8 rounded-full`}
          >
            4
          </button>
        </div>
      </nav>
      <main className="flex flex-col py-9 px-6 bg-neutral-White mx-4 rounded-md -translate-y-[4.5rem]">
        {step === 1 && !thankYou ? (
          <StepOne client={client} setClient={setClient} />
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
        <footer className="sticky bottom-0 w-full flex justify-between p-4 bg-neutral-White mt-auto">
          {step > 1 ? (
            <button
              onClick={() => handleToPreviousStep()}
              className="text-sm font-bold text-neutral-CoolGray"
            >
              Go Back
            </button>
          ) : null}
          <button
            onClick={() => {
              if (step < 4) return handleToNextStep();
              handleThankYou();
            }}
            className={`${
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
  );
}

export default App;
