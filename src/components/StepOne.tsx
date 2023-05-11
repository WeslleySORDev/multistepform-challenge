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
        <h1 className="text-primary-MarineBlue font-bold text-2xl">
          Personal Info
        </h1>
        <h2 className="text-neutral-CoolGray text-lg">
          Please provide your name, email, address, and phone number.
        </h2>
      </div>
      <form className="flex flex-col gap-3 mt-4" action="submit">
        <div className="flex flex-col">
          <div className="flex justify-between">
            <label
              className="text-sm text-primary-MarineBlue"
              htmlFor="form-name"
            >
              Name*
            </label>
            {missingValue && client.name === "" ? (
              <span className="text-sm text-primary-StrawberryRed font-bold">
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
            className={`text-sm placeholder-neutral-CoolGray border ${
              missingValue && client.name === ""
                ? "border-primary-StrawberryRed focus:border-primary-StrawberryRed"
                : "border-neutral-CoolGray focus:border-primary-MarineBlue"
            } text-primary-MarineBlue focus:ring-0 font-bold placeholder:font-normal rounded-md p-2`}
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
              <span className="text-sm text-primary-StrawberryRed font-bold">
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
            className={`text-sm placeholder-neutral-CoolGray border ${
              missingValue && client.email === ""
                ? "border-primary-StrawberryRed focus:border-primary-StrawberryRed"
                : "border-neutral-CoolGray focus:border-primary-MarineBlue"
            } text-primary-MarineBlue font-bold focus:ring-0 placeholder:font-normal rounded-md p-2`}
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
            {missingValue && client.phoneNumber === "" ? (
              <span className="text-sm text-primary-StrawberryRed font-bold">
                This field is required
              </span>
            ) : null}
          </div>
          <input
            value={client.phoneNumber}
            onChange={(e) => {
              setClient({
                ...client,
                phoneNumber: e.currentTarget.value,
              });
              if (missingValue) setMissingValue(false);
            }}
            className={`text-sm placeholder-neutral-CoolGray border ${
              missingValue && client.phoneNumber === ""
                ? "border-primary-StrawberryRed focus:border-primary-StrawberryRed"
                : "border-neutral-CoolGray focus:border-primary-MarineBlue"
            } text-primary-MarineBlue focus:ring-0 font-bold placeholder:font-normal rounded-md p-2`}
            id="form-phone-number"
            type="text"
            placeholder="e.g. +1 234 567 890"
          />
        </div>
      </form>
    </>
  );
}
