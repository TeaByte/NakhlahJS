import { FreshContext, Handlers, type PageProps } from "$fresh/server.ts";
import { getCookies } from "$std/http/mod.ts";
import NavBar from "../components/Nav.tsx";
import Toast from "../islands/Toast.tsx";
import { getStudent } from "../utils/KV.ts";
import { populateCache } from "../utils/course-cache.ts";

populateCache();
export default async function Layout(req: Request, ctx: FreshContext) {
  const session = getCookies(req.headers)["sessionId"] ?? "";
  const completed = (await getStudent(session))?.completedCourses ?? [];
  return (
    // Don't delete data-theme="dracula", used for defult theme and styles
    <html dir="rtl" lang="ar" data-theme="dracula">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>نخلة جي أس</title>
        <link rel="stylesheet" href="/styles.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
        <script src="/theme-loader.js"></script>
      </head>
      <body>
        <div class="h-screen">
          <NavBar completed={completed} />
          <ctx.Component />
          <Toast />
        </div>
      </body>
    </html>
  );
}
