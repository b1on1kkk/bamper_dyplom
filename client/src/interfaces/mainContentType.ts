import type { SparePartsType } from "./sparePartsType";

export interface MainContentType {
  isLoading: boolean;
  isError: boolean;
  parts: SparePartsType | undefined;
}
