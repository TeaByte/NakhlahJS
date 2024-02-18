import { FreshContext, Handlers, type PageProps } from "$fresh/server.ts";
import NavBar from "../components/Nav.tsx";

import { populateCache } from "../utils/course-cache.ts";
populateCache();

// deno-lint-ignore require-await
export default async function Layout(req: Request, ctx: FreshContext) {
  return (
    // Don't delete data-theme="nord", used for defult theme and styles
    <html dir="rtl" lang="ar" data-theme="nord">
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
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-TDHJL7ZT23"
        >
        </script>

        <link rel="manifest" href="/manifest.json" />
        <script src="/JavaScript/index.js"></script>
        <script type="module" src="/JavaScript/sw-rg.js"></script>
      </head>
      <body>
        <section id="old-check" class="flex flex-col w-full justify-center items-center h-screen z-[99999] bg-base-300 p-5 gap-2 text-center hidden">
          <p class="text-2xl">
            يعتبر المتصفح الذي تستخدمه قديمًا وغير مدعوم حاليًا. يُرجى تحديث المتصفح الخاص بك أو استخدام متصفح آخر لضمان تجربة متصفح فعّالة.
          </p>
          <p>
            نحن نلتزم بتوفير الدعم لمتصفحاتكم، حيث نعمل بجد لضمان تجربة موثوقة وفعّالة لجميع المستخدمين
          </p>
        </section>
        <NavBar />
        <ctx.Component />
      </body>
    </html>
  );
}
