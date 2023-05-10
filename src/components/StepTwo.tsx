import IconArcade from "/assets/images/icon-arcade.svg";
import IconAdvanced from "/assets/images/icon-advanced.svg";
import IconPro from "/assets/images/icon-pro.svg";

export function StepTwo() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="text-primary-MarineBlue font-bold text-2xl">
          Select your plan
        </h1>
        <h2 className="text-neutral-CoolGray text-lg">
          You have the option of monthly or yearly billing.
        </h2>
      </div>
      <div className="flex flex-col gap-3 mt-6">
        <button className="flex gap-4 items-center p-4 rounded-md border border-primary-PurplishBlue bg-neutral-Alabaster">
          <img src={IconArcade} alt="" />
          <div className="flex flex-col gap-1 flex-1 items-start justify-center">
            <span className="text-primary-MarineBlue font-bold">Arcade</span>
            <span className="text-neutral-CoolGray">$9/mo</span>
          </div>
        </button>
        <button className="flex gap-4 items-center p-4 rounded-md border border-neutral-CoolGray">
          <img src={IconAdvanced} alt="" />
          <div className="flex flex-col gap-1 flex-1 items-start justify-center">
            <span>Advanced</span>
            <span>$12/mo</span>
          </div>
        </button>
        <button className="flex gap-4 items-center p-4 rounded-md border border-neutral-CoolGray">
          <img src={IconPro} alt="" />
          <div className="flex flex-col gap-1 flex-1 items-start justify-center">
            <span>Pro</span>
            <span>$15/mo</span>
          </div>
        </button>
        <div className="flex items-center justify-center gap-3 bg-neutral-Alabaster py-4">
          <span>Monthly</span>
          <button className="px-1 w-10 py-1 bg-primary-MarineBlue rounded-full">
            <div className="h-3 w-3 rounded-full bg-neutral-White"></div>
          </button>
          <span>Yearly</span>
        </div>
      </div>
    </>
  );
}
