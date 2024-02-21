import { Course, CourseGroup } from "@/utils/types.ts";

import Collapse from "./Collapse.tsx";
import CourseCard from "./CourseCard.tsx";
import ProgressSection from "@/islands/ProgressSection.tsx";

interface CoursesProps {
  courses: (Course | CourseGroup)[];
  total: number;
}

export default function Courses({ courses, total }: CoursesProps) {
  return (
    <>
      <div className="py-2 bg-base-300 p-4 rounded-md">
        <ProgressSection total={total} />
      </div>
      <section className="flex flex-col gap-2 mb-4 mt-6" f-client-nav={false}>
        {courses.map((course) => {
          // Group of courses
          if ("courses" in course) {
            return (
              <div key={course.label}>
                <Collapse title={course.label} courses={course.courses} />
              </div>
            );
          } else {
            // Single course
            return (
              <div key={course.slug}>
                <CourseCard course={course} />
              </div>
            );
          }
        })}

        <div>
          <p className="mt-3 text-2xl">نعمل على الدروس القادمة...</p>
          <a
            href="https://github.com/TeaByte/NakhlahJS"
            className="text-gray-500 hover:underline"
            target="_blank"
          >
            هل تود المساهمه في الموقع ؟
          </a>
        </div>
      </section>
    </>
  );
}