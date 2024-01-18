import { useContext } from "react";
import ClientContext from "../../../context/client";
import StepContext from "../../../context/step";
import { plans } from "../../../variables/Plan";

export function StepFourContentItems() {
  const { client } = useContext(ClientContext);
  const { setStep } = useContext(StepContext);
  return (
    <div className="flex flex-col gap-2 bg-neutral-Magnolia px-4 py-5">
      <div className="flex items-center">
        <div className="flex flex-col">
          <span className="font-bold text-primary-MarineBlue">
            {client.plan.name} ({client.planType === 0 ? "Monthly" : "Yearly"})
          </span>
          <button
            onClick={() => setStep(2)}
            className="w-fit text-sm text-neutral-CoolGray underline hover:text-primary-PurplishBlue"
          >
            Change
          </button>
        </div>
        <span className="ml-auto font-bold text-primary-MarineBlue">
          $
          {
            plans[plans.findIndex((plan) => plan.name === client.plan.name)]
              .prices[client.planType]
          }
          /{client.planType === 0 ? "mo" : "yr"}
        </span>
      </div>
      {client.addons && client.addons?.length > 0 ? (
        <>
          <div className="h-[0.5px] w-full bg-neutral-CoolGray content-[]"></div>
          {client.addons.map((addon) => {
            console.log(addon);
            return (
              <div key={addon.name} className="flex items-center">
                <span className="text-neutral-CoolGray">{addon.name}</span>
                <span className="ml-auto text-primary-MarineBlue">
                  +${addon.prices[client.planType]}/
                  {client.planType === 0 ? "mo" : "yr"}
                </span>
              </div>
            );
          })}
        </>
      ) : null}
    </div>
  );
}
