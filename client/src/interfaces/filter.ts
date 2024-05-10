export type FilterBy = { name: string; code: string } | null;

export interface FilterState {
  body: FilterBy;
  fuel: FilterBy;
  brand: FilterBy;
  model: FilterBy;
  article: FilterBy;
  year_to: FilterBy;
  price_to: FilterBy;
  spare_id: FilterBy;
  category: FilterBy;
  year_from: FilterBy;
  price_from: FilterBy;
  transmission: FilterBy;
  engine_volume: FilterBy;
}
