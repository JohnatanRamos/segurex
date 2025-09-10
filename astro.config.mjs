// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import astroIcon from "astro-icon";
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    astroIcon({
      svgoOptions: {
        "fa6-solid": () => import("@iconify-json/fa6-solid/icons.json"),
        "fa6-brands": () => import("@iconify-json/fa6-brands/icons.json"),
      },
    }),
  ],
  output: "server",
  adapter: vercel()
});
