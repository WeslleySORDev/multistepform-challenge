import { Client } from "../../../types/Client";
import { StepFourContentItems } from "./items";
import { StepFourContentTotal } from "./total";

type StepFourContentProps = {
  client: Client;
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

export function StepFourContent({ client, setStep }: StepFourContentProps) {
  return (
    <>
      <StepFourContentItems client={client} setStep={setStep} />
      <StepFourContentTotal client={client} />
    </>
  );
}
