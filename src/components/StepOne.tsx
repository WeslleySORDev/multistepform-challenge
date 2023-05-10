export function StepOne() {
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
          <label
            className="text-sm text-primary-MarineBlue"
            htmlFor="form-name"
          >
            Name
          </label>
          <input
            className="text-sm text-neutral-CoolGray border border-neutral-CoolGray rounded-md p-2"
            id="form-name"
            type="text"
            placeholder="e.g. Stephen King"
          />
        </div>
        <div className="flex flex-col">
          <label
            className="text-sm text-primary-MarineBlue"
            htmlFor="form-email"
          >
            Email Address
          </label>
          <input
            className="text-sm text-neutral-CoolGray border border-neutral-CoolGray rounded-md p-2"
            id="form-email"
            type="text"
            placeholder="e.g. stephenking@lorem.com"
          />
        </div>
        <div className="flex flex-col">
          <label
            className="text-sm text-primary-MarineBlue"
            htmlFor="form-phone-number"
          >
            Phone Number
          </label>
          <input
            className="text-sm text-neutral-CoolGray border border-neutral-CoolGray rounded-md p-2"
            id="form-phone-number"
            type="text"
            placeholder="e.g. +1 234 567 890"
          />
        </div>
      </form>
    </>
  );
}
