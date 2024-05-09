import {
  FilterAction,
  FilterActionKind,
  FilterState
} from "../interfaces/filter";

export function filterReducer(state: FilterState, action: FilterAction) {
  const { type, payload } = action;

  switch (type) {
    case FilterActionKind.BRAND:
      // очищаем поле модели каждый раз, когда пользователь изменяет поле бренда
      return {
        ...state,
        model: null,
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

    case FilterActionKind.CATEGORY:
      return {
        ...state,
        category: payload
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

    case FilterActionKind.ARTICLE:
      return {
        ...state,
        article: payload
      };

    case FilterActionKind.ENGINE_VOLUME:
      return {
        ...state,
        engine_volume: payload
      };

    case FilterActionKind.PRICE_FROM:
      return {
        ...state,
        price_from: payload
      };

    case FilterActionKind.PRICE_TO:
      return {
        ...state,
        price_to: payload
      };

    case FilterActionKind.SPARE_ID:
      return {
        ...state,
        spare_id: payload
      };

    default:
      return state;
  }
}
