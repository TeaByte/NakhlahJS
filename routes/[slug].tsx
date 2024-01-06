import { Course } from "../utils/course.ts";
import { getCourse } from "./index.tsx";
import { Handlers } from "$fresh/server.ts";
import { PageProps } from "$fresh/server.ts";
import { CSS, render } from "$gfm";
import { Head } from "$fresh/runtime.ts";
import Editor from "../islands/Editor.tsx";

export const handler: Handlers<Course> = {
  async GET(_req, ctx) {
    console.log(ctx.params.slug);
    const course = await getCourse(atob(ctx.params.slug));

    if (course === null) return ctx.renderNotFound();
    return ctx.render(course);
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
        {/* <meta property="og:image" content={course.snippet} /> */}
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
          <div id="split-0" class="overflow-y-scroll">
            <section dir="rtl" class="p-3 py-5">
              <h1 class="text-3xl mb-3">{course.title}</h1>
              <div
                id="document"
                class="markdown-body"
                data-color-mode="dark"
                data-dark-theme="dark"
                style={{ backgroundColor: "inherit" }}
                dangerouslySetInnerHTML={{ __html: render(course.content) }}
              />
            </section>
          </div>
          <div id="split-1" class="flex flex-col gap-2">
            <p class="py-2 bg-[#1E1E1E]"></p>
            <div dir="ltr" class="h-[400px]" id="editor"></div>
            <Editor
              preCode={'console.log("Hello World!")'}
              testCode={"x == x"}
            />
          </div>
        </div>
      </main>
    </>
  );
}
