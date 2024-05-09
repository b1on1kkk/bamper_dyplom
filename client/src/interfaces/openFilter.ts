import { FilterActionKind } from "./filter";

export interface FilterOpenAction {
  payload: boolean;
  type: FilterActionKind;
}

export interface FilterOpenState {
  body: boolean;
  fuel: boolean;
  brand: boolean;
  model: boolean;
  year_to: boolean;
  year_from: boolean;
  spare_part: boolean;
  transmission: boolean;
}
