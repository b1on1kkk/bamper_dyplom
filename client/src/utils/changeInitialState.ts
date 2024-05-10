import { filterState } from "../constants/initialFilterState";

import { translateFromEngToRus } from "./translateFromEngToRus";

import type { Brands } from "../interfaces/brands";
import type { Models } from "../interfaces/models";
import type { FilterState } from "../interfaces/filter";

export function changeInitialState(
  searchParams: URLSearchParams,
  brands: Array<Brands>,
  models: Array<Models> | undefined
) {
  const searchParamsObject = Object.fromEntries(searchParams);

  const buff = { ...filterState } as FilterState;

  for (const [key, value] of Object.entries(searchParamsObject)) {
    if (value) {
      if (key === "brand") {
        for (let i = 0; i < brands.length; i++) {
          if (brands[i].code === value) {
            buff[key as keyof FilterState] = {
              name: brands[i].name,
              code: brands[i].code
            };
            break;
          }
        }
      } else if (key === "model" && models) {
        for (let i = 0; i < models.length; i++) {
          if (models[i].code === value) {
            buff[key as keyof FilterState] = {
              name: models[i].name,
              code: models[i].code
            };
            break;
          }
        }
      } else {
        buff[key as keyof FilterState] = {
          name: translateFromEngToRus(value),
          code: value
        };
      }
    }
  }

  return buff;
}
