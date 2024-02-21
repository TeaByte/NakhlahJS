import { Head } from "$fresh/runtime.ts";
import { Handlers } from "$fresh/server.ts";
import { PageProps } from "$fresh/server.ts";

import { Course, CourseGroup } from "@/utils/types.ts";
import { cache } from "@/utils/course-cache.ts";

import Footer from "@/components/Main/Footer.tsx";

import IconChevronDown from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/chevron-down.tsx";
import ProgressCheck from "@/islands/ProgressCheck.tsx";

interface Props {
  courses: CourseGroup;
}
export const handler: Handlers<Props> = {
  GET(_req, ctx) {
    let foundCourseGroup: CourseGroup | Course | undefined = undefined;
    const toFind = decodeURIComponent(ctx.params.slug);
    foundCourseGroup = cache.courses.find((c) => {
      return "courses" in c && c.courses.length > 0 &&
        c.lableSlug === toFind;
    });
    if (!foundCourseGroup) return ctx.renderNotFound();
    return ctx.render({
      courses: foundCourseGroup as CourseGroup,
    });
  },
};

export default function CoursePage(props: PageProps<Props>) {
  const { courses: foundCourseGroup } = props.data;
  return (
    <>
      <Head>
        <title>نخلة - {foundCourseGroup.label}</title>
        <meta property="og:title" content="نخلة جي أس" />
      </Head>
      <main class="flex flex-col h-full-minus-bar">
        <div class="w-full my-6 grow bg-base-300 rounded-btn flex flex-col justify-center items-center py-8 md:py-0">
          <div>
            <div class="flex gap-1 items-center">
              <h2 class="text-3xl font-bold">
                {foundCourseGroup.label}
              </h2>
              <IconChevronDown />
            </div>
            <div f-client-nav={false} class="flex flex-col mt-2 pr-3 gap-3">
              {foundCourseGroup.courses.map((course) => (
                <a
                  title={course.title}
                  href={`/${course.slug}`}
                  class="gray-200 hover:opacity-75 list-none"
                  style={{ order: course.order }}
                >
                  <h3 class="text-gray-500 font-bold flex gap-1 items-center rounded-btn">
                    <ProgressCheck slug={course.slug} />
                    {course.title}
                  </h3>
                </a>
              ))}
            </div>
            <div class="flex w-full">
              <a title="العودة الى صفحة الدروس" href="/courses" class="underline mt-4">
                العودة الى صفحة الدروس
              </a>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
