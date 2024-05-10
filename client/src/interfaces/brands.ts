import { Models } from "./models";

export interface BrandsAllData {
  data: Array<Brands>;
  message: string;
  status: number;
}

export interface Brands {
  name: string;
  code: string;
  model: Array<Models>;
}
