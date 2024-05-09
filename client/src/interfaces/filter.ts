export enum FilterActionKind {
  BRAND = "BRAND",
  MODEL = "MODEL",
  YEAR_FROM = "YEAR_FROM",
  YEAR_TO = "YEAR_TO",
  SPARE_PART = "SPARE_PART",
  FUEL = "FUEL",
  TRANSMISSION = "TRANSMISSION",
  BODY = "BODY",
  INITIAL_STATE = "INITIAL_STATE"
}

export interface FilterAction {
  type: FilterActionKind;
  payload: string | null;
}

export interface FilterState {
  brand: string | null;
  model: string | null;
  year_from: string | null;
  year_to: string | null;
  spare_part: string | null;
  fuel: string | null;
  transmission: string | null;
  body: string | null;
}
