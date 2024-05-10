import type { Models } from "./models";
import type { FilterBy } from "./filter";
import type { Brands } from "./brands";
import type { FilterType } from "./filterType";
import type { ActualYears } from "./actualYears";

type Description = "small" | "large";

export interface FilterButtonType {
  value: FilterBy;
  filterType: FilterType;
  buttonTitle: string;
  openStatus: boolean;
  descriptionType: Description;
  data: Array<Brands> | Array<Models> | Array<ActualYears> | undefined;

  onOpenMenu: (e: { attribute: string }) => void;
  onClear: (e: { data: null; attribute: string }) => void;
  onSelectValue: (e: { data: FilterBy; attribute: string }) => void;
}
