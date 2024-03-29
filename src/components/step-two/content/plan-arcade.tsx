import IconArcade from "/assets/images/icon-arcade.svg";
import { plans } from "../../../variables/Plan";

import { useContext } from "react";
import ClientContext from "../../../context/client";

export function StepTwoPlanArcade() {
  const { client, setClient } = useContext(ClientContext);
  return (
    <button
      type="button"
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
            client.plan.name === plans[0].name ? "text-neutral-CoolGray" : ""
          }`}
        >
          ${plans[0].prices[client.planType]}/
          {client.planType === 0 ? "mo" : "yr"}
        </span>
      </div>
    </button>
  );
}
