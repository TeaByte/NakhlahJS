import { Course } from "../utils/types.ts";

import ProgressCheck from "../islands/ProgressCheck.tsx";

export default function CourseCard(props: { course: Course }) {
  const { course } = props;
  return (
    <a
      title={course.title}
      href={`/${course.slug}`}
      class="py-2 gray-200 hover:opacity-75 list-none"
      style={{ order: course.order }}
    >
      <h3 class="text-gray-500 font-bold flex gap-1 items-center">
        <ProgressCheck slug={course.slug} />
        {course.title}
      </h3>
    </a>
  );
}
