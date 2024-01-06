import { Course } from "../utils/types.ts";

export default function CourseCard(props: { course: Course }) {
  const { course } = props;
  return (
    <div
      class="py-4 gray-200 hover:opacity-75"
      style={{ order: course.order }}
    >
      <a title={course.title} href={btoa(`/${course.slug}`)}>
        <h3 class="gray-900 font-bold">
          {course.title}
        </h3>
        <div class="text-gray-500 truncate text-ellipsis max-w-[300px] md:max-w-full overflow-hidden">
          {course.snippet}
        </div>
      </a>
    </div>
  );
}
