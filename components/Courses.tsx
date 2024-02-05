import { getNumberOfCourses } from "@/utils/course.ts";
import { Course, CourseGroup } from "@/utils/types.ts";

import Collapse from "./Collapse.tsx";
import CourseCard from "./CourseCard.tsx";
import ProgressSection from "@/islands/ProgressSection.tsx";
import SW from "@/islands/SW.tsx";

export default function Courses(
  { courses, total }: {
    courses: (Course | CourseGroup)[];
    total: number;
  },
) {
  return (
    <>
      <div className="py-2 bg-base-300 p-4 rounded-md">
        <ProgressSection
          total={total}
        />
      </div>
      {/* <SW /> Self-DOS :) */}
      <section class="flex flex-col gap-2 mb-4 mt-6">
        {courses.map((course, index) => {
          // Group of courses
          if ("courses" in course) {
            return (
              <div key={index}>
                <Collapse
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
          <p class="mt-3 text-2xl">نعمل على الدروس القادمة...</p>
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
