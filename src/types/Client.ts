export interface Client {
  name: string;
  email: string;
  phoneNumber: string;
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
