import { StepThreeAddons } from "./content/addons";
import { StepThreeHeader } from "./header";

export function StepThree() {
  return (
    <div className="flex flex-col gap-4">
      <StepThreeHeader />
      <StepThreeAddons />
    </div>
  );
}
