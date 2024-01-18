import { useContext } from "react";
import ClientContext from "../../../context/client";
import { plans } from "../../../variables/Plan";

export function StepFourContentTotal() {
  const { client } = useContext(ClientContext);
  const totalPrice = () => {
    const planPrice =
      plans[plans.findIndex((plan) => plan.name === client.plan.name)].prices[
        client.planType
      ];
    const addonsPrice =
      client.addons && client.addons?.length > 0
        ? client.addons.reduce((acc, value) => {
            return acc + value.prices[client.planType];
          }, 0)
        : 0;
    return planPrice + addonsPrice;
  };
  return (
    <div className="flex items-center px-4">
      <span className="text-neutral-CoolGray">
        Total (per {client.planType === 0 ? "month" : "year"})
      </span>
      <span className="ml-auto font-bold text-primary-PurplishBlue">
        +${totalPrice()}/{client.planType === 0 ? "mo" : "yr"}
      </span>
    </div>
  );
}
