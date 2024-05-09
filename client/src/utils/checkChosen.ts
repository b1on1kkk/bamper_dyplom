import { FilterOpenState } from "../interfaces/openFilter";

export function checkChosen(openFilterState: FilterOpenState) {
  const values = Object.values(openFilterState);

  return values.some((value) => value === true);
}
