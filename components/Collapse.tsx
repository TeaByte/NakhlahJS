import { Course } from "../utils/types.ts";
import CourseCard from "./CourseCard.tsx";

export default function Collapse(
  { titile, courses }: { titile: string; courses: Course[] },
) {
  return (
    <div class="collapse collapse-arrow bg-base-300">
      <input type="checkbox" />
      <div class="collapse-title text-xl font-medium">
        {titile}
      </div>
      <div class="collapse-content flex flex-col">
        {courses.map((course) => (
          <CourseCard key={course.slug} course={course} />
        ))}
      </div>
    </div>
  );
}
