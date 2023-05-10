import { useState } from "react";
import bgSidebarMobile from "/assets/images/bg-sidebar-mobile.svg";

function App() {
  const [step, setStep] = useState(1);

  return (
    <div className="flex flex-col">
      <nav className="bg-[url(/assets/images/bg-sidebar-mobile.svg)] h-[172px] pt-8">
        <div className="flex gap-4 w-fit mx-auto">
          <button className="bg-primary-LightBlue font-medium h-8 w-8 rounded-full">
            1
          </button>
          <button className="text-neutral-Alabaster border border-neutral-Alabaster font-medium h-8 w-8 rounded-full">
            2
          </button>
          <button className="text-neutral-Alabaster border border-neutral-Alabaster font-medium h-8 w-8 rounded-full">
            3
          </button>
          <button className="text-neutral-Alabaster border border-neutral-Alabaster font-medium h-8 w-8 rounded-full">
            4
          </button>
        </div>
      </nav>
      <main className="flex flex-col py-9 px-6 bg-neutral-White mx-4 rounded-md -translate-y-[4.5rem]">
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
      </main>
      <footer className="flex justify-between p-4 bg-neutral-White">
        <button className="bg-primary-MarineBlue text-neutral-White font-bold rounded-md p-3 text-sm ml-auto">
          Next Step
        </button>
      </footer>
    </div>
  );
}

export default App;
