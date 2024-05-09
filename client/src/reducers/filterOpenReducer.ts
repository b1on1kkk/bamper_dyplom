import { initialOpenFilterState } from "../constants/initialOpenFilterState";

import { FilterActionKind } from "../interfaces/filter";
import type {
  FilterOpenAction,
  FilterOpenState
} from "../interfaces/openFilter";

export function filterOpenReducer(
  state: FilterOpenState,
  action: FilterOpenAction
) {
  const { type, payload } = action;

  switch (type) {
    case FilterActionKind.BRAND:
      return {
        ...initialOpenFilterState,
        brand: payload
      };

    case FilterActionKind.MODEL:
      return {
        ...initialOpenFilterState,
        model: payload
      };

    case FilterActionKind.YEAR_FROM:
      return {
        ...initialOpenFilterState,
        year_from: payload
      };

    case FilterActionKind.YEAR_TO:
      return {
        ...initialOpenFilterState,
        year_to: payload
      };

    case FilterActionKind.CATEGORY:
      return {
        ...initialOpenFilterState,
        category: payload
      };

    case FilterActionKind.FUEL:
      return {
        ...initialOpenFilterState,
        fuel: payload
      };

    case FilterActionKind.TRANSMISSION:
      return {
        ...initialOpenFilterState,
        transmission: payload
      };

    case FilterActionKind.BODY:
      return {
        ...initialOpenFilterState,
        body: payload
      };

    default:
      return initialOpenFilterState;
  }
}
