export enum FilterActionKind {
  BODY = "BODY",
  FUEL = "FUEL",
  BRAND = "BRAND",
  MODEL = "MODEL",
  ARTICLE = "ARTICLE",
  YEAR_TO = "YEAR_TO",
  SPARE_ID = "SPARE_ID",
  CATEGORY = "CATEGORY",
  PRICE_TO = "PRICE_TO",
  YEAR_FROM = "YEAR_FROM",
  PRICE_FROM = "PRICE_FROM",
  TRANSMISSION = "TRANSMISSION",
  ENGINE_VOLUME = "ENGINE_VOLUME",
  INITIAL_STATE = "INITIAL_STATE"
}

export interface FilterAction {
  type: FilterActionKind;
  payload: string | null;
}

export interface FilterState {
  body: string | null;
  fuel: string | null;
  brand: string | null;
  model: string | null;
  article: string | null;
  year_to: string | null;
  price_to: string | null;
  year_from: string | null;
  category: string | null;
  price_from: string | null;
  transmission: string | null;
  engine_volume: string | null;
  spare_id: string | null;
}
