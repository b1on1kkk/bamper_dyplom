import {
  FilterAction,
  FilterActionKind,
  FilterState
} from "../interfaces/filter";

export function filterReducer(state: FilterState, action: FilterAction) {
  const { type, payload } = action;

  switch (type) {
    case FilterActionKind.BRAND:
      return {
        ...state,
        brand: payload
      };

    case FilterActionKind.MODEL:
      return {
        ...state,
        model: payload
      };

    case FilterActionKind.YEAR_FROM:
      return {
        ...state,
        year_from: payload
      };

    case FilterActionKind.YEAR_TO:
      return {
        ...state,
        year_to: payload
      };

    case FilterActionKind.SPARE_PART:
      return {
        ...state,
        spare_part: payload
      };

    case FilterActionKind.FUEL:
      return {
        ...state,
        fuel: payload
      };

    case FilterActionKind.TRANSMISSION:
      return {
        ...state,
        transmission: payload
      };

    case FilterActionKind.BODY:
      return {
        ...state,
        body: payload
      };

    default:
      return state;
  }
}
