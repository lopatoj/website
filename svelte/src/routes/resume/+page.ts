import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch }) => {
	const text = await (await fetch("https://raw.githubusercontent.com/lopatoj/resume/refs/heads/main/resume.tex")).text();
	return { text };
};