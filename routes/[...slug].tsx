import { Head } from "$fresh/runtime.ts";
import { Handlers } from "$fresh/server.ts";
import { PageProps } from "$fresh/server.ts";
import { CSS } from "$gfm";

import { Course } from "../utils/types.ts";
import { getCourse, getJson } from "../utils/course.ts";

import EditorSplit from "../components/EditorSplit.tsx";
import MarkdownSplit from "../components/MarkdownSplit.tsx";

import IconAppWindow from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/app-window.tsx";
import { findNextCourse } from "../utils/course.ts";
import { findPrevCourse } from "../utils/course.ts";

interface Props {
  course: Course;
  lable: string | undefined;
  lableSlug: string | undefined;
  nextCourse: string | undefined;
  prevCourse: string | undefined;
}

export const handler: Handlers<Props> = {
  async GET(_req, ctx) {
    try {
      let lable: string | undefined;
      const course = await getCourse(ctx.params.slug);
      if (course === null) return ctx.renderNotFound();
      const nextCourse = findNextCourse(ctx.params.slug);
      const prevCourse = findPrevCourse(ctx.params.slug);
      if (ctx.params.slug.includes("/")) {
        const [lableSlug, lable] = await getJson(ctx.params.slug.split("/")[0]);
        return ctx.render({ course, lable, lableSlug, nextCourse, prevCourse });
      }
      return ctx.render({
        course,
        lable: undefined,
        lableSlug: undefined,
        nextCourse,
        prevCourse,
      });
    } catch {
      return ctx.renderNotFound();
    }
  },
};

export default function CoursePage(
  props: PageProps<Props>,
) {
  const { course, lable, lableSlug, nextCourse, prevCourse } = props.data;
  return (
    <>
      <Head>
        <title>{course.title}</title>
        <meta name="description" content={course.snippet} />
        <meta name="keywords" content={`${course.title}, ${course.snippet}`} />
        <meta property="og:title" content={course.title} />
        <meta property="og:description" content={course.snippet} />
        <meta
          property="og:url"
          content={`https://nakhlahjs.com/${course.slug}`}
        />
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
        <script src="https://cdn.jsdelivr.net/npm/@tsparticles/confetti@3.0.3/tsparticles.confetti.bundle.min.js">
        </script>
        <link
          rel="stylesheet"
          data-name="vs/editor/editor.main"
          href="https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.45.0/min/vs/editor/editor.main.min.css"
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.45.0/min/vs/loader.min.js">
        </script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/split.js/1.1.1/split.min.js">
        </script>
        <script src="/JavaScript/monaco.js"></script>
        <script src="/JavaScript/courses-page.js" />
      </Head>
      <main>
        <div
          class="btn btn-info bg-[#5bbcd1] hover:bg-[#5bbcd1] flex items-center gap-1 md:hidden mt-2 fixed z-[999] bottom-2 right-2"
          id="open-editor"
        >
          <IconAppWindow />
          <p>
            فتح المحرر
          </p>
        </div>
        <div
          id="loading"
          class="flex-grow h-full-minus-bar w-full absolute bg-base-300 z-[9999] transition-opacity duration-500 ease-in-out opacity-100"
        >
          <div className="flex flex-col justify-center items-center h-[89%] bg-base-100 opacity-90 dark:opacity-100 dark:bg-transparent p-5 rounded-lg">
            <div className="code-loader">
              <span>{"{"}</span>
              <span>{"}"}</span>
            </div>
            <p className="text-2xl">جاري تحميل المحتوى</p>
          </div>
        </div>
        <div dir="ltr" class="split flex-grow h-full-minus-bar">
          <div id="split-0" class="flex flex-col">
            <EditorSplit slug={course.slug} />
          </div>
          <div id="split-1" class="overflow-y-scroll">
            <MarkdownSplit
              nextCourse={nextCourse}
              prevCourse={prevCourse}
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
