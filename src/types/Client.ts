export interface Client {
  name: string;
  email: string;
  phoneNumber: number | undefined;
  plan: IPlan;
  planType: number;
  addons?: IAddon[];
}

export interface IPlan {
  name: string;
  price: number;
}
export interface IAddon {
  name: string;
  prices: number[];
}
