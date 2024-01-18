import { Client } from "../../types/Client";
import { StepFourContent } from "./content";
import { StepFourHeader } from "./header";

type StepFourProps = {
  client: Client;
  setStep: React.Dispatch<React.SetStateAction<number>>;
};
export function StepFour({ client, setStep }: StepFourProps) {
  return (
    <>
      <StepFourHeader />
      <StepFourContent client={client} setStep={setStep} />
    </>
  );
}
