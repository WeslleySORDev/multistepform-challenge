import IconPro from "/assets/images/icon-pro.svg";
import { plans } from "../../../variables/Plan";
import { Client } from "../../../types/Client";

type StepTwoPlanProProps = {
  client: Client;
  setClient: React.Dispatch<React.SetStateAction<Client>>;
};

export function StepTwoPlanPro({ client, setClient }: StepTwoPlanProProps) {
  return (
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
            client.plan.name === plans[2].name ? "text-neutral-CoolGray" : ""
          }`}
        >
          ${plans[2].prices[client.planType]}/
          {client.planType === 0 ? "mo" : "yr"}
        </span>
      </div>
    </button>
  );
}
