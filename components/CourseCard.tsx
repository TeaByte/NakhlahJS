import { Course } from "../utils/types.ts";

import IconCircle from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/circle.tsx";

export default function CourseCard(props: { course: Course }) {
  const { course } = props;
  return (
    <div
      class="py-2 gray-200 hover:opacity-75"
      style={{ order: course.order }}
    >
      <a title={course.title} href={`/${course.slug}`}>
        <h3 class="text-gray-500 font-bold flex gap-1 items-center">
          <IconCircle aria-hidden="true" class="h-4 w-4" /> {course.title}
        </h3>
      </a>
    </div>
  );
}
