import type { ParamMatcher } from "@sveltejs/kit";
import { type PageType, pageSource } from "$lib/pageSource";

export const match = ((param: string): param is PageType => {
  return pageSource.isPageType(param);
}) satisfies ParamMatcher;
