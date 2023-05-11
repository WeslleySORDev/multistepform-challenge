export function StepThree() {
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
        <div className="flex justify-center gap-4 items-center p-4 rounded-md border border-neutral-LightGray">
          <input
            className="border-neutral-LightGray rounded-sm focus:ring-0 focus:ring-transparent"
            type="checkbox"
            name="online-service-add-on"
            id="online-service-add-on"
          />
          <div className="flex flex-col ">
            <span className="text-primary-MarineBlue font-bold">
              Online Service
            </span>
            <span className="text-sm text-neutral-CoolGray">
              Access to multiplayer games
            </span>
          </div>
          <span className="text-primary-PurplishBlue text-sm ml-auto">+$1/mo</span>
        </div>
        <div className="flex justify-center gap-4 items-center p-4 rounded-md border border-neutral-LightGray">
          <input
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
          <span className="text-primary-PurplishBlue text-sm ml-auto">+$2/mo</span>
        </div>
        <div className="flex justify-center gap-4 items-center p-4 rounded-md bg-neutral-Alabaster border border-primary-PurplishBlue">
          <input
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
          <span className="text-primary-PurplishBlue text-sm ml-auto">+$2/mo</span>
        </div>
      </div>
    </>
  );
}
