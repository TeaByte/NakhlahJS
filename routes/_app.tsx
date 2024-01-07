import { type PageProps } from "$fresh/server.ts";
import NavBar from "../components/Nav.tsx";

export default function App({ Component }: PageProps) {
  return (
    <html data-theme="sunset" dir="rtl" lang="ar">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Nakhlahjs</title>
        <link rel="stylesheet" href="/styles.css" />
        <link
          href="https://cdn.jsdelivr.net/npm/daisyui@4.5.0/dist/full.min.css"
          rel="stylesheet"
          type="text/css"
        />
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
        </div>
      </body>
    </html>
  );
}
