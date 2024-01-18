import IconAdvanced from "/assets/images/icon-advanced.svg";
import { plans } from "../../../variables/Plan";
import { Client } from "../../../types/Client";

type StepTwoPlanAdvancedProps = {
  client: Client;
  setClient: React.Dispatch<React.SetStateAction<Client>>;
};

export function StepTwoPlanAdvanced({
  client,
  setClient,
}: StepTwoPlanAdvancedProps) {
  return (
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
            client.plan.name === plans[1].name ? "text-neutral-CoolGray" : ""
          }`}
        >
          ${plans[1].prices[client.planType]}/
          {client.planType === 0 ? "mo" : "yr"}
        </span>
      </div>
    </button>
  );
}
