import type { ActualYears } from "../interfaces/actualYears";

export function actualYears() {
  const years: Array<ActualYears> = [];

  for (let i = 1980; i <= 2024; i++)
    years.push({ name: i.toString(), code: i.toString() });

  return years;
}
