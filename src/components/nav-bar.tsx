import bgSidebarMobile from "/assets/images/bg-sidebar-mobile.svg";
import bgSidebarDesktop from "/assets/images/bg-sidebar-desktop.svg";

import { useWindowSize } from "../hooks/useWindowSize";

type NavBarProps = {
  currentStep: number;
};

export function NavBar({ currentStep }: NavBarProps) {
  const { width } = useWindowSize();
  return (
    <nav className="relative w-full lg:h-[calc(100vh-1rem)] lg:w-auto">
      {width && width >= 1024 ? (
        <img className="h-full w-fit" src={bgSidebarDesktop} alt="" />
      ) : (
        <img className="w-full" src={bgSidebarMobile} alt="" />
      )}
      <div className="absolute top-8 flex w-full justify-center gap-4 lg:left-8 lg:flex-col lg:justify-normal ">
        <div
          className={`flex select-none items-center justify-center lg:w-full lg:justify-normal lg:gap-3`}
        >
          <span
            className={`flex h-8 w-8 items-center justify-center rounded-full ${
              currentStep === 0
                ? "bg-primary-LightBlue"
                : "border border-neutral-Alabaster text-neutral-Alabaster"
            } font-medium`}
          >
            1
          </span>
          {width && width >= 1024 ? (
            <div className="flex flex-col">
              <span className="text-sm text-neutral-LightGray">STEP 1</span>
              <span className="text-sm text-neutral-White">YOUR INFO</span>
            </div>
          ) : null}
        </div>
        <div
          className={`flex select-none items-center justify-center lg:w-full lg:justify-normal lg:gap-3`}
        >
          <span
            className={`flex h-8 w-8 items-center justify-center rounded-full ${
              currentStep === 1
                ? "bg-primary-LightBlue"
                : "border border-neutral-Alabaster text-neutral-Alabaster"
            } font-medium`}
          >
            2
          </span>
          {width && width >= 1024 ? (
            <div className="flex flex-col">
              <span className="text-sm text-neutral-LightGray">STEP 2</span>
              <span className="text-sm text-neutral-White">SELECT PLAN</span>
            </div>
          ) : null}
        </div>
        <div
          className={`flex select-none items-center justify-center lg:w-full lg:justify-normal lg:gap-3`}
        >
          <span
            className={`flex h-8 w-8 items-center justify-center rounded-full ${
              currentStep === 2
                ? "bg-primary-LightBlue"
                : "border border-neutral-Alabaster text-neutral-Alabaster"
            } font-medium`}
          >
            3
          </span>
          {width && width >= 1024 ? (
            <div className="flex flex-col">
              <span className="text-sm text-neutral-LightGray">STEP 3</span>
              <span className="text-sm text-neutral-White">ADD-ONS</span>
            </div>
          ) : null}
        </div>
        <div
          className={`flex select-none items-center justify-center lg:w-full lg:justify-normal lg:gap-3`}
        >
          <span
            className={`flex h-8 w-8 items-center justify-center rounded-full ${
              currentStep === 3
                ? "bg-primary-LightBlue"
                : "border border-neutral-Alabaster text-neutral-Alabaster"
            } font-medium`}
          >
            4
          </span>
          {width && width >= 1024 ? (
            <div className="flex flex-col">
              <span className="text-sm text-neutral-LightGray">STEP 4</span>
              <span className="text-sm text-neutral-White">SUMMARY</span>
            </div>
          ) : null}
        </div>
      </div>
    </nav>
  );
}
