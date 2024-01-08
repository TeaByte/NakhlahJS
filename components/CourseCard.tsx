import { Course } from "../utils/types.ts";

import IconCircle from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/circle.tsx";
import IconcircleCheck from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/circle-check.tsx";


export default function CourseCard(props: { course: Course }) {
  
  // FOR TESTING PURPOSES ONLY
  // add comments course to the local storage
  // localStorage.setItem("completedCourses", JSON.stringify(["comments"]));

  // check if the student has completed the course from the local storage
  const completedCourses = localStorage.getItem("completedCourses");
  const completedCoursesArray = completedCourses
    ? JSON.parse(completedCourses)
    : [];
  const isCompleted = completedCoursesArray.includes(props.course.slug);
  const { course } = props;
  return (
    <div
      class="py-2 gray-200 hover:opacity-75"
      style={{ order: course.order }}
    >
      <a title={course.title} href={`/${course.slug}`}>
        <h3 class="text-gray-500 font-bold flex gap-1 items-center">
          {/* <IconCircle aria-hidden="true" class="h-4 w-4" /> {course.title} */}
          {

            isCompleted ? <IconcircleCheck aria-hidden="true" class="h-4 w-4 text-gray-300" /> : <IconCircle aria-hidden="true" class="h-4 w-4" />
          }
          {course.title}
        </h3>
      </a>
    </div>
  );
}
