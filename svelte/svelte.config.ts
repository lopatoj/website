import adapter from "@sveltejs/adapter-vercel";
import type { Config } from "@sveltejs/kit";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

const config: Config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter(),
    env: {
      dir: "../",
    },
    alias: {
      "@app.css": "./src/app.css",
    },
  },
};

export default config;
