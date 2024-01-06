import { Course } from "../utils/course.ts";
import { getCourse } from "./index.tsx";
import { Handlers } from "$fresh/server.ts";
import { PageProps } from "$fresh/server.ts";
import { CSS, render } from "$gfm";
import { Head } from "$fresh/runtime.ts";

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
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
      </Head>

      <div class="flex">
        <section class="w-full">
          <div dir="ltr" class="w-full h-full" id="editor"></div>
        </section>
        <section>
          <h1 class="text-5xl font-bold">{course.title}</h1>
          <div class="text-gray-500 mt-1">
            {course.snippet}
          </div>
          <div
            id="document"
            class="markdown-body"
            dangerouslySetInnerHTML={{ __html: render(course.content) }}
          />
        </section>
      </div>
    </>
  );
}
