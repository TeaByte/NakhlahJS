import { Course } from "../utils/course.ts";
import { getCourse } from "./index.tsx";
import { Handlers } from "$fresh/server.ts";
import { PageProps } from "$fresh/server.ts";
import { CSS, render } from "$gfm";
import { Head } from "$fresh/runtime.ts";
import Editor from "../islands/Editor.tsx";

export const handler: Handlers<Course> = {
  async GET(_req, ctx) {
    try {
      const slug = atob(ctx.params.slug);
      const course = await getCourse(slug);
      if (course === null) return ctx.renderNotFound();
      return ctx.render(course);
    } catch {
      return ctx.renderNotFound();
    }
  },
};

export default function CoursePage(props: PageProps<Course>) {
  const course = props.data;

  return (
    <>
      <Head>
        <title>Nakhlahjs - {course.title}</title>
        <meta name="description" content={course.snippet} />
        <meta name="keywords" content={course.title} />
        <meta property="og:title" content={course.title} />
        <meta property="og:description" content={course.snippet} />

        <meta
          property="og:url"
          content={`https://nakhlahjs.com/${course.slug}`}
        />

        <style dangerouslySetInnerHTML={{ __html: CSS }} />

        <link
          rel="stylesheet"
          data-name="vs/editor/editor.main"
          href="https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.45.0/min/vs/editor/editor.main.min.css"
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.45.0/min/vs/loader.min.js">
        </script>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/split.js/1.1.1/split.min.js">
        </script>

        <script src="/moaco.js"></script>
        <script src="/resizer.js" />
      </Head>

      <main>
        <div dir="ltr" class="split flex-grow max-h-screen min-h-screen">
          <div id="split-0" class="flex flex-col gap-2">
            <p class="py-2 bg-[#1E1E1E]"></p>
            <div dir="ltr" class="h-[400px]" id="editor"></div>
            <Editor
              preCode={'console.log("Hello World!")'}
              testCode={"x == x"}
            />
          </div>
          <div id="split-1" class="overflow-y-scroll">
            <section dir="rtl" class="p-3 py-5">
              <div class="flex flex-col gap-2 md:flex-row justify-between items-center mb-4">
                <h1 class="text-3xl">{course.title}</h1>
                <a
                  target="_blank"
                  href={`https://github.com/TeaByte/NakhlahJS/edit/main/courses/${course.slug}.md`}
                  class="pl-3 flex items-center gap-1 hover:opacity-75"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                    />
                  </svg>
                  تعديل
                </a>
              </div>

              <div
                id="document"
                class="markdown-body mb-28"
                data-color-mode="dark"
                data-dark-theme="dark"
                style={{ backgroundColor: "inherit" }}
                dangerouslySetInnerHTML={{ __html: render(course.content) }}
              />
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
