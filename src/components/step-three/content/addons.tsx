import { Client } from "../../../types/Client";
import { addons } from "../../../variables/Addon";

type StepThreeAddonsProps = {
  client: Client;
  setClient: React.Dispatch<React.SetStateAction<Client>>;
};

export function StepThreeAddons({ client, setClient }: StepThreeAddonsProps) {
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
    <div className="mt-6 flex flex-col gap-3">
      {addons.map((addon) => {
        return (
          <div
            key={addon.name}
            onClick={() => handleCheckbox(addon.name, addon.prices)}
            className={`flex items-center justify-center gap-4 rounded-md p-4 ${
              client.addons?.some((addonRes) => addonRes.name === addon.name)
                ? "border-primary-PurplishBlue bg-neutral-Alabaster"
                : ""
            } cursor-pointer border lg:hover:border-primary-PurplishBlue`}
          >
            <input
              readOnly
              checked={
                client.addons?.some((addonRes) => addonRes.name === addon.name)
                  ? true
                  : false
              }
              className="rounded-sm border-neutral-LightGray focus:ring-0 focus:ring-transparent"
              type="checkbox"
              name={addon.htmlId}
              id={addon.htmlId}
            />
            <div className="flex flex-col ">
              <span className="font-bold text-primary-MarineBlue">
                {addon.name}
              </span>
              <span className="text-sm text-neutral-CoolGray">
                {addon.description}
              </span>
            </div>
            <span className="ml-auto text-sm text-primary-PurplishBlue">
              ${addon.prices[client.planType]}/
              {client.planType === 0 ? "mo" : "yr"}
            </span>
          </div>
        );
      })}
    </div>
  );
}
