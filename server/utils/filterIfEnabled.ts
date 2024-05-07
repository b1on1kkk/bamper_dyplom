import type { UsedFilter } from "../interface/UsedFilter";

export function filterIfEnabled(
  pushTo: UsedFilter,
  filter: { [key: string]: string },
  key: string,
  value: string | number
) {
  if (filter[key]) {
    pushTo.where.AND.push({ [key]: value });
  }
}
