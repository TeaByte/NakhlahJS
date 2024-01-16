import { Head } from "$fresh/runtime.ts";
import { Handlers } from "$fresh/server.ts";
import { PageProps } from "$fresh/server.ts";
import { CSS } from "$gfm";

import { Course } from "../utils/types.ts";
import { getCourse, getJson } from "../utils/course.ts";

import EditorSplit from "../components/EditorSplit.tsx";
import MarkdownSplit from "../components/MarkdownSplit.tsx";

import IconAppWindow from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/app-window.tsx";

export const handler: Handlers<
  {
    course: Course;
    lable: string | undefined;
    lableSlug: string | undefined;
  }
> = {
  async GET(_req, ctx) {
    try {
      let lable: string | undefined;
      const course = await getCourse(ctx.params.slug);
      if (ctx.params.slug.includes("/")) {
        const [lableSlug, lable] = await getJson(ctx.params.slug.split("/")[0]);
        return ctx.render({ course, lable, lableSlug });
      }
      if (course === null) return ctx.renderNotFound();
      return ctx.render({ course, lable: undefined, lableSlug: undefined });
    } catch {
      return ctx.renderNotFound();
    }
  },
};

export default function CoursePage(
  props: PageProps<{
    course: Course;
    lable: string | undefined;
    lableSlug: string | undefined;
  }>,
) {
  const { course, lable, lableSlug } = props.data;
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
        <script src="/monaco.js"></script>
        <script src="/resizer.js" />
      </Head>
      <main>
        <div
          class="btn btn-info bg-[#68e4ff] hover:bg-[#68e4ff] hover:opacity-75 flex items-center gap-1 md:hidden mt-2 fixed z-[999] bottom-2 right-2"
          id="open-editor"
        >
          <IconAppWindow />
          <p>
            فتح المحرر
          </p>
        </div>

        <div dir="ltr" class="split flex-grow h-full-minus-bar">
          <div id="split-0" class="flex flex-col">
            <EditorSplit slug={course.slug} />
          </div>
          <div id="split-1" class="overflow-y-scroll">
            <MarkdownSplit
              course={course}
              lable={lable}
              lableSlug={lableSlug}
            />
          </div>
        </div>
      </main>
      {/* <ProgressTrack slug={course.slug} /> */}
    </>
  );
}
