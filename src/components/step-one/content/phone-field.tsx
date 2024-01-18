import { useContext } from "react";
import ClientContext from "../../../context/client";

type StepOneContentPhoneFieldProps = {
  missingValue: boolean;
  setMissingValue: React.Dispatch<React.SetStateAction<boolean>>;
};

export function StepOneContentPhoneField({
  missingValue,
  setMissingValue,
}: StepOneContentPhoneFieldProps) {
  const { client, setClient } = useContext(ClientContext);
  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <label
          className="text-sm text-primary-MarineBlue"
          htmlFor="form-phone-number"
        >
          Phone Number*
        </label>{" "}
        {missingValue && client.phoneNumber === undefined ? (
          <span className="text-sm font-bold text-primary-StrawberryRed">
            This field is required
          </span>
        ) : null}
      </div>
      <input
        value={client.phoneNumber || ""}
        onChange={(e) => {
          if (e.currentTarget.value) {
            setClient({
              ...client,
              phoneNumber: parseInt(e.currentTarget.value),
            });
          } else {
            setClient({
              ...client,
              phoneNumber: undefined,
            });
          }
          if (missingValue) setMissingValue(false);
        }}
        className={`border text-sm placeholder-neutral-CoolGray ${
          missingValue && client.phoneNumber === undefined
            ? "border-primary-StrawberryRed focus:border-primary-StrawberryRed"
            : "border-neutral-CoolGray focus:border-primary-MarineBlue"
        } rounded-md p-2 font-bold text-primary-MarineBlue placeholder:font-normal focus:ring-0`}
        id="form-phone-number"
        type="tel"
        placeholder="e.g. 123 456 789"
      />
    </div>
  );
}
