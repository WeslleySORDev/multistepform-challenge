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
        <h1 className="text-primary-MarineBlue font-bold text-2xl">
          Select your plan
        </h1>
        <h2 className="text-neutral-CoolGray text-lg">
          You have the option of monthly or yearly billing.
        </h2>
      </div>
      <div className="flex flex-col gap-3 mt-6">
        <button
          onClick={() => {
            setClient({
              ...client,
              plan: { ...plans[0], price: plans[0].prices[client.planType] },
            });
          }}
          className={`flex gap-4 items-center p-4 rounded-md border ${
            client.plan.name === plans[0].name
              ? "border-primary-PurplishBlue bg-neutral-Alabaster"
              : "border-neutral-CoolGray"
          }`}
        >
          <img src={IconArcade} alt="" />
          <div className="flex flex-col gap-1 flex-1 items-start justify-center">
            <span
              className={`${
                client.plan.name === plans[0].name
                  ? "text-primary-MarineBlue font-bold"
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
          className={`flex gap-4 items-center p-4 rounded-md border ${
            client.plan.name === plans[1].name
              ? "border-primary-PurplishBlue bg-neutral-Alabaster"
              : "border-neutral-CoolGray"
          }`}
        >
          <img src={IconAdvanced} alt="" />
          <div className="flex flex-col gap-1 flex-1 items-start justify-center">
            <span
              className={`${
                client.plan.name === plans[1].name
                  ? "text-primary-MarineBlue font-bold"
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
          className={`flex gap-4 items-center p-4 rounded-md border ${
            client.plan.name === plans[2].name
              ? "border-primary-PurplishBlue bg-neutral-Alabaster"
              : "border-neutral-CoolGray"
          }`}
        >
          <img src={IconPro} alt="" />
          <div className="flex flex-col gap-1 flex-1 items-start justify-center">
            <span
              className={`${
                client.plan.name === plans[2].name
                  ? "text-primary-MarineBlue font-bold"
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
            className="px-1 w-10 py-1 bg-primary-MarineBlue rounded-full"
          >
            <div
              className={`${
                client.planType === 1 && "translate-x-[calc(100%+6px)]"
              } transition-all duration-500 h-3 w-3 rounded-full bg-neutral-White`}
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
