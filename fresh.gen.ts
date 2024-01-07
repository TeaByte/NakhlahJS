// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_slug_ from "./routes/[...slug].tsx";
import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $api_test from "./routes/api/test.ts";
import * as $group_slug_ from "./routes/group/[slug].tsx";
import * as $index from "./routes/index.tsx";
import * as $Editor from "./islands/Editor.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/[...slug].tsx": $_slug_,
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/api/test.ts": $api_test,
    "./routes/group/[slug].tsx": $group_slug_,
    "./routes/index.tsx": $index,
  },
  islands: {
    "./islands/Editor.tsx": $Editor,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
