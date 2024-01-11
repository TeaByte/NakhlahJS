import { type PageProps } from "$fresh/server.ts";
import NavBar from "../components/Nav.tsx";
import Toast from "../islands/Toast.tsx";
import { populateCache } from "../utils/course-cache.ts";

populateCache();

export default function App({ Component }: PageProps) {
  return (
    <html dir="rtl" lang="ar">
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
      </head>
      <body>
        <div class="h-screen">
          <NavBar />
          <Component />
          <Toast title="تم حفظ الكود" />
        </div>
      </body>
    </html>
  );
}
