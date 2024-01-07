import { Course } from "../utils/types.ts";

export default function Collapse(
  { titile, courses }: { titile: string; courses: Course[] },
) {
  return (
    <div
      tabindex={1}
      class="collapse collapse-plus border border-base-300 bg-base-200"
    >
      <input type="checkbox" />
      <div class="collapse-title text-xl font-medium">
        {titile}
      </div>
      <div class="collapse-content">
        {courses.map((course) => (
          <li key={course.slug}>
            <a title={course.title} href={`/${course.slug}`}>{course.title}</a>
          </li>
        ))}
      </div>
    </div>
  );
}
