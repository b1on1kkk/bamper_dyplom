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
  payload: { name: string; code: string } | null;
}

export interface FilterState {
  body: { name: string; code: string } | null;
  fuel: { name: string; code: string } | null;
  brand: { name: string; code: string } | null;
  model: { name: string; code: string } | null;
  article: { name: string; code: string } | null;
  year_to: { name: string; code: string } | null;
  price_to: { name: string; code: string } | null;
  spare_id: { name: string; code: string } | null;
  category: { name: string; code: string } | null;
  year_from: { name: string; code: string } | null;
  price_from: { name: string; code: string } | null;
  transmission: { name: string; code: string } | null;
  engine_volume: { name: string; code: string } | null;
}
