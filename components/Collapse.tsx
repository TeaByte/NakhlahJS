import { Course } from "../utils/types.ts";
import CourseCard from "./CourseCard.tsx";

export default function Collapse(
  { titile, courses }: { titile: string; courses: Course[] },
) {
  return (
    <div
      tabindex={0}
      class="collapse collapse-arrow border border-base-300 bg-base-200"
    >
      <input type="checkbox" />
      <div class="collapse-title text-xl font-medium">
        {titile}
      </div>
      <div class="collapse-content list-none">
        {courses.map((course) => (
          <li key={course.slug}>
            <CourseCard course={course} />
          </li>
        ))}
      </div>
    </div>
  );
}
