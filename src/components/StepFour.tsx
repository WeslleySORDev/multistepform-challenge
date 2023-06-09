import { Client } from "../types/Client";
import { plans } from "../variables/Plan";

type StepFourProps = {
  client: Client;
  setStep: React.Dispatch<React.SetStateAction<number>>;
};
export function StepFour({ client, setStep }: StepFourProps) {
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
    console.log(addonsPrice);
    return planPrice + addonsPrice;
  };
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold text-primary-MarineBlue">
          Finishing up
        </h1>
        <h2 className="text-lg text-neutral-CoolGray">
          Double-check everything looks OK before confirming.
        </h2>
      </div>
      <div className="mt-6 flex flex-col gap-2 bg-neutral-Magnolia px-4 py-5">
        <div className="flex items-center">
          <div className="flex flex-col">
            <span className="font-bold text-primary-MarineBlue">
              {client.plan.name} ({client.planType === 0 ? "Monthly" : "Yearly"}
              )
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
      <div className="mt-8 flex items-center px-4">
        <span className="text-neutral-CoolGray">
          Total (per {client.planType === 0 ? "month" : "year"})
        </span>
        <span className="ml-auto font-bold text-primary-PurplishBlue">
          +${totalPrice()}/{client.planType === 0 ? "mo" : "yr"}
        </span>
      </div>
    </>
  );
}
