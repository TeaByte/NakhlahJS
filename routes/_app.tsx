import { type PageProps } from "$fresh/server.ts";
export default function App({ Component }: PageProps) {
  return (
    <html data-theme="sunset" dir="rtl">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>fresh-project</title>
        <link rel="stylesheet" href="/styles.css" />
        <link
          href="https://cdn.jsdelivr.net/npm/daisyui@4.5.0/dist/full.min.css"
          rel="stylesheet"
          type="text/css"
        />

        <link
          rel="stylesheet"
          data-name="vs/editor/editor.main"
          href="https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.45.0/min/vs/editor/editor.main.min.css"
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.45.0/min/vs/loader.min.js">
        </script>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <script src="https://unpkg.com/split.js/dist/split.min.js"></script>
        <script src={`/moaco.js`}></script>
        <Component />
      </body>
    </html>
  );
}
