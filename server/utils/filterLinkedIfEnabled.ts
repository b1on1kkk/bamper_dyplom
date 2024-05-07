import type { UsedFilter } from "../interface/UsedFilter";
import type { randObjKeys } from "../interface/randObjKeys";

export function filterLinkedIfEnabled(
  pushTo: UsedFilter,
  filter: randObjKeys,
  key: string,
  value: randObjKeys
) {
  if (filter[key]) {
    pushTo.where.AND.push({ [key]: value });
  }
}
