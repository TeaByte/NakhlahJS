import { Course } from "../utils/types.ts";
import CourseCard from "./CourseCard.tsx";

export default function Collapse(
  { title, courses, completed }: { title: string; courses: Course[]; completed: string[] },
) {
  return (
    <div class="collapse collapse-arrow bg-base-300">
      <input type="checkbox" />
      <div class="collapse-title text-xl font-medium">
        {title}
      </div>
      <div class="collapse-content flex flex-col">
        {courses.map((course) => (
          <CourseCard isDone={completed ? completed.includes(course.slug.replace("\\", "/")) : false} key={course.slug} course={course} />
        ))}
      </div>
    </div>
  );
}
