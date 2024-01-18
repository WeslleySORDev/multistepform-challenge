import { useContext } from "react";
import ClientContext from "../../../context/client";

type StepOneContentEmailFieldProps = {
  missingValue: boolean;
  setMissingValue: React.Dispatch<React.SetStateAction<boolean>>;
};

export function StepOneContentEmailField({
  missingValue,
  setMissingValue,
}: StepOneContentEmailFieldProps) {
  const { client, setClient } = useContext(ClientContext);
  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <label className="text-sm text-primary-MarineBlue" htmlFor="form-email">
          Email Address*
        </label>
        {missingValue && client.email === "" ? (
          <span className="text-sm font-bold text-primary-StrawberryRed">
            This field is required
          </span>
        ) : null}
      </div>
      <input
        value={client.email}
        onChange={(e) => {
          setClient({
            ...client,
            email: e.currentTarget.value,
          });
          if (missingValue) setMissingValue(false);
        }}
        className={`border text-sm placeholder-neutral-CoolGray ${
          missingValue && client.email === ""
            ? "border-primary-StrawberryRed focus:border-primary-StrawberryRed"
            : "border-neutral-CoolGray focus:border-primary-MarineBlue"
        } rounded-md p-2 font-bold text-primary-MarineBlue placeholder:font-normal focus:ring-0`}
        id="form-email"
        type="text"
        placeholder="e.g. stephenking@lorem.com"
      />
    </div>
  );
}
