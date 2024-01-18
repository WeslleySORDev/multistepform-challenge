import React from "react";

import { ClientContextProvider } from "./client";
import { StepContextProvider } from "./step";

type GlobalContextProps = {
  children: React.ReactNode;
};

function GlobalContext({ children }: GlobalContextProps) {
  return (
    <ClientContextProvider>
      <StepContextProvider>{children}</StepContextProvider>
    </ClientContextProvider>
  );
}

export default GlobalContext;
