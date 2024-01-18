import { StepOneHeader } from "./header";
import { StepOneContentEmailField } from "./content/email-field";
import { StepOneContentNameField } from "./content/name-field";
import { StepOneContentPhoneField } from "./content/phone-field";

type StepOneProps = {
  missingValue: boolean;
  setMissingValue: React.Dispatch<React.SetStateAction<boolean>>;
};

export function StepOne({ missingValue, setMissingValue }: StepOneProps) {
  return (
    <>
      <StepOneHeader />
      <form className="mt-4 flex flex-col gap-3" action="submit">
        <StepOneContentNameField
          missingValue={missingValue}
          setMissingValue={setMissingValue}
        />
        <StepOneContentEmailField
          missingValue={missingValue}
          setMissingValue={setMissingValue}
        />
        <StepOneContentPhoneField
          missingValue={missingValue}
          setMissingValue={setMissingValue}
        />
      </form>
    </>
  );
}
