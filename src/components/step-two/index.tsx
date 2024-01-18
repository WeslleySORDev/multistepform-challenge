import { Client } from "../../types/Client";
import { StepTwoHeader } from "./header";
import { StepTwoPlanArcade } from "./content/plan-arcade";
import { StepTwoPlanAdvanced } from "./content/plan-advanced";
import { StepTwoPlanPro } from "./content/plan-pro";
import { StepTwoContentToggleMonthlyYearly } from "./content/toggle-monthly-yearly";

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
      <StepTwoHeader />
      <div className="mt-6 flex flex-col gap-3">
        <StepTwoPlanArcade client={client} setClient={setClient} />
        <StepTwoPlanAdvanced client={client} setClient={setClient} />
        <StepTwoPlanPro client={client} setClient={setClient} />
        <StepTwoContentToggleMonthlyYearly
          client={client}
          handleSetPlanType={handleSetPlanType}
        />
      </div>
    </>
  );
}
