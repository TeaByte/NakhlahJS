import { Course } from "../utils/types.ts";
import CourseCard from "./CourseCard.tsx";

export default function Collapse(
  { titile, courses }: { titile: string; courses: Course[] },
) {
  return (
    <div class="collapse collapse-arrow bg-base-300">
      <input type="radio" name="my-accordion-2" checked={false} />
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
