/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import "$std/dotenv/load.ts";

import { start } from "$fresh/server.ts";
import manifest from "./fresh.gen.ts";
// import config from "./fresh.config.ts";

import { freshSEOPlugin } from "https://deno.land/x/fresh_seo/mod.ts";
import { walk } from "https://deno.land/std/fs/mod.ts";

// Geting the path name of all courses to feed it to the SEO plugin
async function getAllPaths(directory: string): Promise<string[]> {
  const paths: string[] = [];
  for await (const entry of walk(directory, { includeDirs: false })) {
    if (entry.isFile && entry.name.endsWith(".md")) {
      const relativePath = entry.path.replace(/^courses[\\/]/, "").replace(
        /\.md$/,
        "",
      );
      if (!relativePath.endsWith(".json")) {
        const normalizedPath = relativePath.replace(/\\/g, "/");
        paths.push(normalizedPath);
      }
    }
  }
  return paths;
}

const allPaths = await getAllPaths("courses");
const coursesPath = allPaths.slice(1);

// Genrating sitemap.xml
await start(manifest, {
  plugins: [
    freshSEOPlugin(manifest, {
      include: [...coursesPath],
    }),
  ],
});