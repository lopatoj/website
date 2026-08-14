import type { ParamMatcher } from "@sveltejs/kit";

export const match: ParamMatcher = (param): param is "blog" | "project" => {
  return param === "blog" || param === "project";
};
