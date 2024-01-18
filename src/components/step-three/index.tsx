import { Client } from "../../types/Client";
import { StepThreeAddons } from "./content/addons";
import { StepThreeHeader } from "./header";

type StepThreeProps = {
  client: Client;
  setClient: React.Dispatch<React.SetStateAction<Client>>;
};

export function StepThree({ client, setClient }: StepThreeProps) {
  return (
    <>
      <StepThreeHeader />
      <StepThreeAddons client={client} setClient={setClient} />
    </>
  );
}
