import { StepFourContent } from "./content";
import { StepFourHeader } from "./header";

export function StepFour() {
  return (
    <div className="flex flex-col gap-4">
      <StepFourHeader />
      <StepFourContent />
    </div>
  );
}
