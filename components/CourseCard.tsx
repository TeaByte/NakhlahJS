import { Course } from "../utils/types.ts";

export default function CourseCard(props: { course: Course }) {
  const { course } = props;
  return (
    <div
      class="py-2 gray-200 hover:opacity-75"
      style={{ order: course.order }}
    >
      <a title={course.title} href={`/${course.slug}`}>
        <h3 class="text-gray-500 font-bold">
          {course.title}
        </h3>
      </a>
    </div>
  );
}
