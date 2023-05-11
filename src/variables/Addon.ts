export const addons: {
    name: string;
    description: string;
    prices: number[];
    htmlId: string;
  }[] = [
    {
      name: "Online Service",
      prices: [1, 10],
      description: "Access to multiplayer games",
      htmlId: "online-service-add-on",
    },
    {
      name: "Larger Storage",
      prices: [2, 20],
      description: "Extra 1TB of cloud save",
      htmlId: "larger-storage-add-on",
    },
    {
      name: "Customizable profile",
      prices: [2, 20],
      description: "Custom theme on your profile",
      htmlId: "customizable-profile-add-on",
    },
  ];