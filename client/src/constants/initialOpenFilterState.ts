export interface OpenFilterState {
  body: boolean;
  fuel: boolean;
  brand: boolean;
  model: boolean;
  year_to: boolean;
  category: boolean;
  year_from: boolean;
  transmission: boolean;
}

export const openFilterState = {
  body: false,
  fuel: false,
  brand: false,
  model: false,
  year_to: false,
  category: false,
  year_from: false,
  transmission: false
};
