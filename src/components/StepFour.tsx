export function StepFour() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="text-primary-MarineBlue font-bold text-2xl">
          Finishing up
        </h1>
        <h2 className="text-neutral-CoolGray text-lg">
          Double-check everything looks OK before confirming.
        </h2>
      </div>
      <div className="flex flex-col gap-2 mt-6 bg-neutral-Magnolia px-4 py-5">
        <div className="flex items-center">
          <div className="flex flex-col">
            <span className="text-primary-MarineBlue font-bold">
              Arcade (Monthly)
            </span>
            <span className="text-sm text-neutral-CoolGray underline">
              Change
            </span>
          </div>
          <span className="text-primary-MarineBlue font-bold ml-auto">
            $9/mo
          </span>
        </div>
        <div className="content-[] h-[0.5px] w-full bg-neutral-CoolGray"></div>
        <div className="flex items-center">
          <span className="text-neutral-CoolGray">
            Online service
          </span>
          <span className="text-primary-MarineBlue ml-auto">+$1/mo</span>
        </div>
        <div className="flex items-center">
          <span className="text-neutral-CoolGray">
            Larger storage
          </span>
          <span className="text-primary-MarineBlue ml-auto">+$2/mo</span>
        </div>
      </div>
      <div className="flex items-center px-4 mt-8">
          <span className="text-neutral-CoolGray">
            Total (per month)
          </span>
          <span className="text-primary-PurplishBlue font-bold ml-auto">+$12/mo</span>
        </div>
    </>
  );
}
