import { ParsedQs } from "qs";

export function isString(
  x: string | ParsedQs | string[] | ParsedQs[]
): x is string {
  return typeof x === "string";
}
