import { createSearchParams } from "react-router-dom";

import type { FilterState } from "../interfaces/filter";

export function searchQueryParams(filter: FilterState) {
  const newFilter: { [key: string]: string } = {};

  for (const [key, value] of Object.entries(filter)) {
    if (value) newFilter[key] = value.code;
  }

  return createSearchParams(newFilter);
}
