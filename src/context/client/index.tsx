import { createContext, useState } from "react";
import { Client } from "../../types/Client";

type PropsClientContext = {
  client: Client;
  setClient: React.Dispatch<React.SetStateAction<Client>>;
};

type ClientContextProviderProps = {
  children: React.ReactNode;
};

const DEFAULT_VALUE = {
  client: {
    name: "",
    email: "",
    phoneNumber: undefined,
    plan: {
      name: "Arcade",
      price: 9,
    },
    planType: 0,
    addons: [],
  },
  setClient: () => {},
};

const ClientContext = createContext<PropsClientContext>(DEFAULT_VALUE);

function ClientContextProvider({ children }: ClientContextProviderProps) {
  const [client, setClient] = useState<Client>(DEFAULT_VALUE.client);
  return (
    <ClientContext.Provider
      value={{
        client,
        setClient,
      }}
    >
      {children}
    </ClientContext.Provider>
  );
}

export { ClientContextProvider };
export default ClientContext;
