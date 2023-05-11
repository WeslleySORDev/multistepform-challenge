import { Client } from "../types/Client";
import { addons } from "../variables/Addon";

type StepThreeProps = {
  client: Client;
  setClient: React.Dispatch<React.SetStateAction<Client>>;
};

export function StepThree({ client, setClient }: StepThreeProps) {
  const handleCheckbox = (name: string, prices: number[]) => {
    if (client.addons?.some((addon) => addon.name === name)) {
      let addons = client.addons;
      const getIndex = addons?.findIndex((addon) => addon.name === name);
      addons.splice(getIndex, 1);
      setClient({ ...client, addons: addons });
    } else {
      let addons = client.addons;
      addons?.push({
        name,
        prices,
      });
      setClient({ ...client, addons: addons });
    }
  };
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="text-primary-MarineBlue font-bold text-2xl">
          Pick add-ons
        </h1>
        <h2 className="text-neutral-CoolGray text-lg">
          Add-ons help enhance your gaming experience.
        </h2>
      </div>
      <div className="flex flex-col gap-3 mt-6">
        {addons.map((addon) => {
          return (
            <div
              key={addon.name}
              onClick={() => handleCheckbox(addon.name, addon.prices)}
              className={`flex justify-center gap-4 items-center p-4 rounded-md ${
                client.addons?.some((addonRes) => addonRes.name === addon.name)
                  ? "border-primary-PurplishBlue bg-neutral-Alabaster"
                  : ""
              } border cursor-pointer lg:hover:border-primary-PurplishBlue`}
            >
              <input
                readOnly
                checked={
                  client.addons?.some(
                    (addonRes) => addonRes.name === addon.name
                  )
                    ? true
                    : false
                }
                className="border-neutral-LightGray rounded-sm focus:ring-0 focus:ring-transparent"
                type="checkbox"
                name={addon.htmlId}
                id={addon.htmlId}
              />
              <div className="flex flex-col ">
                <span className="text-primary-MarineBlue font-bold">
                  {addon.name}
                </span>
                <span className="text-sm text-neutral-CoolGray">
                  {addon.description}
                </span>
              </div>
              <span className="text-primary-PurplishBlue text-sm ml-auto">
                ${addon.prices[client.planType]}/
                {client.planType === 0 ? "mo" : "yr"}
              </span>
            </div>
          );
        })}
        {/* <div
          onClick={() => handleCheckbox("Larger storage", [2, 20])}
          className={`flex justify-center gap-4 items-center p-4 rounded-md ${
            client.addons?.some((addon) => addon.name === "Larger storage")
              ? "border-primary-PurplishBlue bg-neutral-Alabaster"
              : ""
          } border cursor-pointer hover:border-primary-PurplishBlue`}
        >
          <input
            readOnly
            checked={
              client.addons?.some((addon) => addon.name === "Larger storage")
                ? true
                : false
            }
            className="border-neutral-LightGray rounded-sm focus:ring-0 focus:ring-transparent"
            type="checkbox"
            name="larger-storage-add-on"
            id="larger-storage-add-on"
          />
          <div className="flex flex-col ">
            <span className="text-primary-MarineBlue font-bold">
              Larger Storage
            </span>
            <span className="text-sm text-neutral-CoolGray">
              Extra 1TB of cloud save
            </span>
          </div>
          <span className="text-primary-PurplishBlue text-sm ml-auto">
            +$2/mo
          </span>
        </div>
        <div
          onClick={() => handleCheckbox("Customizable profile", [2, 20])}
          className={`flex justify-center gap-4 items-center p-4 rounded-md ${
            client.addons?.some(
              (addon) => addon.name === "Customizable profile"
            )
              ? "border-primary-PurplishBlue bg-neutral-Alabaster"
              : ""
          } border cursor-pointer hover:border-primary-PurplishBlue`}
        >
          <input
            readOnly
            checked={
              client.addons?.some(
                (addon) => addon.name === "Customizable profile"
              )
                ? true
                : false
            }
            className="border-neutral-LightGray rounded-sm focus:ring-0 focus:ring-transparent"
            type="checkbox"
            name="customizable-profile-add-on"
            id="customizable-profile-add-on"
          />
          <div className="flex flex-col ">
            <span className="text-primary-MarineBlue font-bold">
              Customizable profile
            </span>
            <span className="text-sm text-neutral-CoolGray">
              Custom theme on your profile
            </span>
          </div>
          <span className="text-primary-PurplishBlue text-sm ml-auto">
            +$2/mo
          </span>
        </div> */}
      </div>
    </>
  );
}
