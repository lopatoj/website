import { pageSource, type PageType } from "$lib/pageSource";
import type { ParamMatcher } from "@sveltejs/kit";

export const match = ((param: string): param is PageType => {
  return pageSource.isPageType(param);
}) satisfies ParamMatcher;
