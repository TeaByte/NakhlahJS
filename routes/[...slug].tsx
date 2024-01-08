import { Course } from "../utils/types.ts";
import { getCourse, getJson } from "../utils/course.ts";
import { Handlers } from "$fresh/server.ts";
import { PageProps } from "$fresh/server.ts";
import { CSS, render } from "$gfm";
import { Head } from "$fresh/runtime.ts";
import Editor from "../islands/Editor.tsx";
import EditButton from "../components/EditButton.tsx";

export const handler: Handlers<{ course: Course; lable: string | undefined }> =
  {
    async GET(_req, ctx) {
      try {
        let lable: string | undefined;
        const course = await getCourse(ctx.params.slug);
        if (ctx.params.slug.includes("/")) {
          lable = await getJson(ctx.params.slug.split("/")[0]);
        }
        if (course === null) return ctx.renderNotFound();
        return ctx.render({ course, lable });
      } catch {
        return ctx.renderNotFound();
      }
    },
  };

export default function CoursePage(
  props: PageProps<{ course: Course; lable: string | undefined }>,
) {
  const { course, lable } = props.data;
  return (
    <>
      <Head>
        <title>نخلة - {course.title}</title>
        <meta name="description" content={course.snippet} />
        <meta name="keywords" content={`${course.title}, ${course.snippet}`} />
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
        <div>
          <div dir="ltr" class="split flex-grow h-full-minus-bar">
            <div id="split-0" class="flex flex-col">
              <div class="mt-2">
                <div class="mb-2 mx-2 rounded-lg overflow-hidden">
                  <div
                    class="h-[400px]"
                    dir="ltr"
                    id="editor"
                  >
                    <p
                      id="editor-loading"
                      class="flex h-full items-center justify-center text-lg bg-[#1E1E1E] rounded-lg"
                    >
                      جاري تحميل المحرر
                    </p>
                  </div>
                </div>
              </div>
              <Editor
                preCode={'console.log("Hello World!")'}
                testCode={"x == x"}
              />
            </div>
            <div id="split-1" class="overflow-y-scroll">
              <section dir="rtl" class="p-3 py-5 mb-40">
                <div>
                  <div class="text-sm breadcrumbs" dir="rtl">
                    <ul>
                      <li>
                        <a href="/">الرئيسية</a>
                      </li>
                      {lable && (
                        <li>
                          <a href={`/group/${lable}`}>
                            {lable}
                          </a>
                        </li>
                      )}
                      <li class="underline">{course.title}</li>
                    </ul>
                  </div>
                  <div class="flex flex-col gap-2 md:flex-row justify-between mb-4">
                    <h1 class="text-3xl">{course.title}</h1>
                    <EditButton slug={course.slug} />
                  </div>
                </div>

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
          </div>
        </div>
      </main>
    </>
  );
}
