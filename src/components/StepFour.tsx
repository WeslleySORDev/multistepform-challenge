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
        <h1 className="text-primary-MarineBlue font-bold text-2xl">
          Finishing up
        </h1>
        <h2 className="text-neutral-CoolGray text-lg">
          Double-check everything looks OK before confirming.
        </h2>
      </div>
      <div className="flex flex-col gap-2 mt-6 bg-neutral-Magnolia px-4 py-5">
        <div className="flex items-center">
          <div className="flex flex-col">
            <span className="text-primary-MarineBlue font-bold">
              {client.plan.name} ({client.planType === 0 ? "Monthly" : "Yearly"}
              )
            </span>
            <button
              onClick={() => setStep(2)}
              className="w-fit text-sm text-neutral-CoolGray underline"
            >
              Change
            </button>
          </div>
          <span className="text-primary-MarineBlue font-bold ml-auto">
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
            <div className="content-[] h-[0.5px] w-full bg-neutral-CoolGray"></div>
            {client.addons.map((addon) => {
              console.log(addon);
              return (
                <div key={addon.name} className="flex items-center">
                  <span className="text-neutral-CoolGray">{addon.name}</span>
                  <span className="text-primary-MarineBlue ml-auto">
                    +${addon.prices[client.planType]}/
                    {client.planType === 0 ? "mo" : "yr"}
                  </span>
                </div>
              );
            })}
          </>
        ) : null}
      </div>
      <div className="flex items-center px-4 mt-8">
        <span className="text-neutral-CoolGray">
          Total (per {client.planType === 0 ? "month" : "year"})
        </span>
        <span className="text-primary-PurplishBlue font-bold ml-auto">
          +${totalPrice()}/{client.planType === 0 ? "mo" : "yr"}
        </span>
      </div>
    </>
  );
}
