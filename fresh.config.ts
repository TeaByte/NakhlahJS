import { defineConfig } from "$fresh/server.ts";
import tailwind from "$fresh/plugins/tailwind.ts";
import SW_cache from "@/plugins/sw-page-json-builder.ts";
export default defineConfig({
  plugins: [tailwind(), 
    SW_cache(),
  ],
});
