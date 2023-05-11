import IconArcade from "/assets/images/icon-arcade.svg";
import IconAdvanced from "/assets/images/icon-advanced.svg";
import IconPro from "/assets/images/icon-pro.svg";
import { Client } from "../types/Client";
import { plans } from "../variables/Plan";

type StepTwoProps = {
  client: Client;
  setClient: React.Dispatch<React.SetStateAction<Client>>;
};

export function StepTwo({ client, setClient }: StepTwoProps) {
  const handleSetPlanType = () => {
    if (client.planType === 0) {
      return setClient({ ...client, planType: 1 });
    }
    return setClient({ ...client, planType: 0 });
  };
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold text-primary-MarineBlue">
          Select your plan
        </h1>
        <h2 className="text-lg text-neutral-CoolGray">
          You have the option of monthly or yearly billing.
        </h2>
      </div>
      <div className="mt-6 flex flex-col gap-3">
        <button
          onClick={() => {
            setClient({
              ...client,
              plan: { ...plans[0], price: plans[0].prices[client.planType] },
            });
          }}
          className={`flex items-center gap-4 rounded-md border p-4 ${
            client.plan.name === plans[0].name
              ? "border-primary-PurplishBlue bg-neutral-Alabaster"
              : "border-neutral-CoolGray"
          }`}
        >
          <img src={IconArcade} alt="" />
          <div className="flex flex-1 flex-col items-start justify-center gap-1">
            <span
              className={`${
                client.plan.name === plans[0].name
                  ? "font-bold text-primary-MarineBlue"
                  : ""
              }`}
            >
              Arcade
            </span>
            <span
              className={`${
                client.plan.name === plans[0].name
                  ? "text-neutral-CoolGray"
                  : ""
              }`}
            >
              ${plans[0].prices[client.planType]}/
              {client.planType === 0 ? "mo" : "yr"}
            </span>
          </div>
        </button>
        <button
          onClick={() => {
            setClient({
              ...client,
              plan: { ...plans[1], price: plans[1].prices[client.planType] },
            });
          }}
          className={`flex items-center gap-4 rounded-md border p-4 ${
            client.plan.name === plans[1].name
              ? "border-primary-PurplishBlue bg-neutral-Alabaster"
              : "border-neutral-CoolGray"
          }`}
        >
          <img src={IconAdvanced} alt="" />
          <div className="flex flex-1 flex-col items-start justify-center gap-1">
            <span
              className={`${
                client.plan.name === plans[1].name
                  ? "font-bold text-primary-MarineBlue"
                  : ""
              }`}
            >
              Advanced
            </span>
            <span
              className={`${
                client.plan.name === plans[1].name
                  ? "text-neutral-CoolGray"
                  : ""
              }`}
            >
              ${plans[1].prices[client.planType]}/
              {client.planType === 0 ? "mo" : "yr"}
            </span>
          </div>
        </button>
        <button
          onClick={() => {
            setClient({
              ...client,
              plan: { ...plans[2], price: plans[2].prices[client.planType] },
            });
          }}
          className={`flex items-center gap-4 rounded-md border p-4 ${
            client.plan.name === plans[2].name
              ? "border-primary-PurplishBlue bg-neutral-Alabaster"
              : "border-neutral-CoolGray"
          }`}
        >
          <img src={IconPro} alt="" />
          <div className="flex flex-1 flex-col items-start justify-center gap-1">
            <span
              className={`${
                client.plan.name === plans[2].name
                  ? "font-bold text-primary-MarineBlue"
                  : ""
              }`}
            >
              Pro
            </span>
            <span
              className={`${
                client.plan.name === plans[2].name
                  ? "text-neutral-CoolGray"
                  : ""
              }`}
            >
              ${plans[2].prices[client.planType]}/
              {client.planType === 0 ? "mo" : "yr"}
            </span>
          </div>
        </button>
        <div className="flex items-center justify-center gap-3 bg-neutral-Alabaster py-4">
          <span
            className={`${
              client.planType === 0
                ? "text-primary-MarineBlue"
                : "text-neutral-CoolGray"
            }`}
          >
            Monthly
          </span>
          <button
            onClick={() => {
              handleSetPlanType();
            }}
            className="w-10 rounded-full bg-primary-MarineBlue px-1 py-1"
          >
            <div
              className={`${
                client.planType === 1 && "translate-x-[calc(100%+6px)]"
              } h-3 w-3 rounded-full bg-neutral-White transition-all duration-500`}
            ></div>
          </button>
          <span
            className={`${
              client.planType === 1
                ? "text-primary-MarineBlue"
                : "text-neutral-CoolGray"
            }`}
          >
            Yearly
          </span>
        </div>
      </div>
    </>
  );
}
