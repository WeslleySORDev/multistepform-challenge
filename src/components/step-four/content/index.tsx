import { StepFourContentItems } from "./items";
import { StepFourContentTotal } from "./total";

export function StepFourContent() {
  return (
    <div className="flex flex-col gap-8">
      <StepFourContentItems />
      <StepFourContentTotal />
    </div>
  );
}
