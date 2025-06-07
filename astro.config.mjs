import {defineConfig} from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: cloudflare(),
  vite: {
    define: {
      "process.env.PUBLIC_SANITY_PROJECT_ID": JSON.stringify(
        process.env.PUBLIC_SANITY_PROJECT_ID
      ),
      "process.env.PUBLIC_SANITY_DATASET": JSON.stringify(
        process.env.PUBLIC_SANITY_DATASET
      ),
    },
  },
  integrations: [tailwind(), react()],
});
