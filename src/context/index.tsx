import React from "react";

import { ClientContextProvider } from "./client";
import { StepContextProvider } from "./step";
import { FormContextProvider } from "./form";

type GlobalContextProps = {
  children: React.ReactNode;
};

function GlobalContext({ children }: GlobalContextProps) {
  return (
    <StepContextProvider>
      <ClientContextProvider>
        <FormContextProvider>{children}</FormContextProvider>
      </ClientContextProvider>
    </StepContextProvider>
  );
}

export default GlobalContext;
