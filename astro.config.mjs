// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://kellyd.netlify.com",
  vite: {
    css: {
      preprocessorOptions: {
        scss: {},
      },
    },
  },
});
