import { Client } from "../../types/Client";

import { StepOneHeader } from "./header";
import { StepOneContentEmailField } from "./content/email-field";
import { StepOneContentNameField } from "./content/name-field";
import { StepOneContentPhoneField } from "./content/phone-field";

type StepOneProps = {
  client: Client;
  missingValue: boolean;
  setClient: React.Dispatch<React.SetStateAction<Client>>;
  setMissingValue: React.Dispatch<React.SetStateAction<boolean>>;
};

export function StepOne({
  client,
  missingValue,
  setClient,
  setMissingValue,
}: StepOneProps) {
  return (
    <>
      <StepOneHeader />
      <form className="mt-4 flex flex-col gap-3" action="submit">
        <StepOneContentNameField
          client={client}
          missingValue={missingValue}
          setClient={setClient}
          setMissingValue={setMissingValue}
        />
        <StepOneContentEmailField
          client={client}
          missingValue={missingValue}
          setClient={setClient}
          setMissingValue={setMissingValue}
        />
        <StepOneContentPhoneField
          client={client}
          missingValue={missingValue}
          setClient={setClient}
          setMissingValue={setMissingValue}
        />
      </form>
    </>
  );
}
