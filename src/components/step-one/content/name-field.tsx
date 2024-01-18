import { Client } from "../../../types/Client";

type StepOneContentNameFieldProps = {
  client: Client;
  missingValue: boolean;
  setClient: React.Dispatch<React.SetStateAction<Client>>;
  setMissingValue: React.Dispatch<React.SetStateAction<boolean>>;
};

export function StepOneContentNameField({
  client,
  missingValue,
  setClient,
  setMissingValue,
}: StepOneContentNameFieldProps) {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <label className="text-sm text-primary-MarineBlue" htmlFor="form-name">
          Name*
        </label>
        {missingValue && client.name === "" ? (
          <span className="text-sm font-bold text-primary-StrawberryRed">
            This field is required
          </span>
        ) : null}
      </div>
      <input
        value={client.name}
        onChange={(e) => {
          setClient({
            ...client,
            name: e.currentTarget.value,
          });
          if (missingValue) setMissingValue(false);
        }}
        className={`border text-sm placeholder-neutral-CoolGray ${
          missingValue && client.name === ""
            ? "border-primary-StrawberryRed focus:border-primary-StrawberryRed"
            : "border-neutral-CoolGray focus:border-primary-MarineBlue"
        } rounded-md p-2 font-bold text-primary-MarineBlue placeholder:font-normal focus:ring-0`}
        id="form-name"
        type="text"
        placeholder="e.g. Stephen King"
      />
    </div>
  );
}