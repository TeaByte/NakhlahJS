import { getNumberOfCourses } from "@/utils/course.ts";
import { Course, CourseGroup } from "@/utils/types.ts";

import Collapse from "./Collapse.tsx";
import CourseCard from "./CourseCard.tsx";
import ProgressSection from "@/islands/ProgressSection.tsx";

export default function Courses(
  { courses, completed }: {
    courses: (Course | CourseGroup)[];
    completed: string[];
  },
) {
  const total = getNumberOfCourses(courses);
  return (
    <>
      <div className="py-2 bg-base-300 p-4 rounded-md">
        <ProgressSection
          total={total}
        />
      </div>
      <div className="mt-5">
        <h1 class="w-1/2 max-md:w-full text-5xl font-bold z-10 mb-2 my-auto">
          الاساسيات
        </h1>
      </div>
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
                />
              </div>
            );
          }
        })}

        <div>
          <p class="mt-3 text-2xl">نعمل على الدروس القادما...</p>
          <a
            href="https://github.com/TeaByte/NakhlahJS"
            class="text-gray-500 hover:underline"
            target="_blank"
          >
            هل تود المساهمه في الموقع ؟
          </a>
        </div>
      </section>
    </>
  );
}
