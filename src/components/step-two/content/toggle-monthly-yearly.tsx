import { Client } from "../../../types/Client";

type StepTwoContentToggleMonthlyYearlyProps = {
  client: Client;
  handleSetPlanType: () => void;
};

export function StepTwoContentToggleMonthlyYearly({
  client,
  handleSetPlanType,
}: StepTwoContentToggleMonthlyYearlyProps) {
  return (
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
  );
}
