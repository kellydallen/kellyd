import defaultTheme from "tailwindcss/defaultTheme";
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        /*sans: ["ClashGrotesk", ...defaultTheme.fontFamily.sans],*/
        sans: ["ClashGrotesk", ...defaultTheme.fontFamily.sans],
        serif: ["Sentient", ...defaultTheme.fontFamily.serif],
        mono: ["'Geist Mono'", ...defaultTheme.fontFamily.mono],
        heading: ["MilligramBold", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};

export default config;
