import { Client } from "../types/Client";

type StepOneProps = {
  client: Client;
  missingValue: boolean;
  setClient: React.Dispatch<React.SetStateAction<Client>>;
  setMissingValue: React.Dispatch<React.SetStateAction<boolean>>;
};

export function StepOne({
  client,
  setClient,
  setMissingValue,
  missingValue,
}: StepOneProps) {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold text-primary-MarineBlue">
          Personal Info
        </h1>
        <h2 className="text-lg text-neutral-CoolGray">
          Please provide your name, email, address, and phone number.
        </h2>
      </div>
      <form className="mt-4 flex flex-col gap-3" action="submit">
        <div className="flex flex-col">
          <div className="flex justify-between">
            <label
              className="text-sm text-primary-MarineBlue"
              htmlFor="form-name"
            >
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
        <div className="flex flex-col">
          <div className="flex justify-between">
            <label
              className="text-sm text-primary-MarineBlue"
              htmlFor="form-email"
            >
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
      </form>
    </>
  );
}
