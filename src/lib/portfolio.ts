import data from "../../data/data.json";

export type Portfolio = typeof data;
export const portfolio: Portfolio = data;

export function hasText(value: string | null | undefined): value is string {
  return typeof value === "string" && value.trim().length > 0;
}
