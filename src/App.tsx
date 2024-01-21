import { useContext, useEffect } from "react";
import { NavBar } from "./components/nav-bar";
import StepContext from "./context/step";
import { FormField } from "./components/form-field";

function App() {
  const { currentStep } = useContext(StepContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentStep]);
  return (
    <div className="flex h-full flex-col lg:flex-row lg:p-2">
      <NavBar currentStep={currentStep} />
      <main className="flex flex-col lg:max-h-[calc(100vh-1rem)] lg:flex-1 lg:overflow-y-auto">
        <FormField />
      </main>
    </div>
  );
}

export default App;
