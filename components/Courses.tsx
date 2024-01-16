import { Course, CourseGroup } from "../utils/types.ts";

import Collapse from "./Collapse.tsx";
import CourseCard from "./CourseCard.tsx";

export default function Courses(
  { courses, completed }: {
    courses: (Course | CourseGroup)[];
    completed: string[];
  },
) {
  return (
    <>
      <h1 class="text-5xl font-bold z-10 mb-2">الاساسيات</h1>
      <section class="flex flex-col gap-2 mb-4">
        {courses.map((course, index) => {
          // Group of courses
          if ("courses" in course) {
            return (
              <div key={index} class="mt-1">
                <Collapse
                  completed={completed}
                  title={course.label}
                  courses={course.courses}
                />
              </div>
            );
          } else {
            // Single course
            return (
              <div key={course.slug}>
                <CourseCard
                  course={course}
                  isDone={completed ? completed.includes(course.slug) : false}
                />
              </div>
            );
          }
        })}
      </section>
    </>
  );
}
