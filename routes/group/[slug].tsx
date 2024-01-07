import { Course, CourseGroup } from "../../utils/types.ts";
import { getCourse } from "../../utils/course.ts";
import { Handlers } from "$fresh/server.ts";
import { PageProps } from "$fresh/server.ts";
import { CSS, render } from "$gfm";
import { Head } from "$fresh/runtime.ts";
import { cache, populateCache } from "../../utils/course-cache.ts";
import CourseCard from "../../components/CourseCard.tsx";

import IconChevronDown from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/chevron-down.tsx";

populateCache();

// TODO - FIX TYPES
export const handler: Handlers<CourseGroup> = {
  GET(_req, ctx) {
    const foundCourseGroup = cache.merged.find((c) => {
      return "courses" in c && c.courses.length > 0 &&
        c.order === parseInt(ctx.params.slug, 10);
    });
    if (!foundCourseGroup) return ctx.renderNotFound();
    return ctx.render(foundCourseGroup as CourseGroup);
  },
};

export default function CoursePage(props: PageProps<CourseGroup>) {
  const foundCourseGroup = props.data;

  return (
    <main class="max-w-screen-md px-4 pt-12 mx-auto mb-6">
      <div class="flex gap-1 items-center">
        <h2 class="text-3xl font-bold">
          {foundCourseGroup.label}
        </h2>
        <IconChevronDown />
      </div>
      <div class="flex flex-col mt-2 pr-3">
        {foundCourseGroup.courses.map((innerCourse) => (
          <CourseCard key={innerCourse.slug} course={innerCourse} />
        ))}
      </div>
    </main>
  );
}
