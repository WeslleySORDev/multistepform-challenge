import { StepTwoHeader } from "./header";
import { StepTwoPlanArcade } from "./content/plan-arcade";
import { StepTwoPlanAdvanced } from "./content/plan-advanced";
import { StepTwoPlanPro } from "./content/plan-pro";
import { StepTwoContentToggleMonthlyYearly } from "./content/toggle-monthly-yearly";

export function StepTwo() {
  return (
    <>
      <StepTwoHeader />
      <div className="mt-6 flex flex-col gap-3">
        <StepTwoPlanArcade />
        <StepTwoPlanAdvanced />
        <StepTwoPlanPro />
        <StepTwoContentToggleMonthlyYearly />
      </div>
    </>
  );
}
