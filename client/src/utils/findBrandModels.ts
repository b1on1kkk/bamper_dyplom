import { Brands } from "../interfaces/brands";

export function findBrandModels(brands: Array<Brands>, brand_name: string) {
  for (let i = 0; i < brands.length; i++) {
    if (brands[i].name === brand_name) return brands[i].model;
  }
}
