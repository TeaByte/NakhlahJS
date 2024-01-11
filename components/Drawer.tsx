import { Course, CourseGroup } from "../utils/types.ts";

import Collapse from "./Collapse.tsx";
import CourseCard from "./CourseCard.tsx";

import IconLayoutSidebarLeftCollapse from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/layout-sidebar-left-collapse.tsx";

export default function Drawer(
  { courses }: { courses: (Course | CourseGroup)[] },
) {
  return (
    <div class="drawer">
      <input
        id="my-drawer-4"
        type="checkbox"
        class="drawer-toggle"
      />
      <div class="drawer-content">
        <label
          for="my-drawer-4"
          class="drawer-button btn btn-active btn-ghost"
        >
          <IconLayoutSidebarLeftCollapse aria-hidden="true" />
        </label>
      </div>
      <div class="drawer-side z-50">
        <label
          for="my-drawer-4"
          aria-label="close sidebar"
          class="drawer-overlay"
        >
        </label>
        <ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content gap-2">
          {courses.map((course, index) => {
            if ("courses" in course) {
              return (
                <Collapse
                  titile={course.label || "بدون عنوان"}
                  courses={course.courses}
                />
              );
            } else {
              return (
                <li key={course.slug}>
                  <CourseCard course={course} />
                </li>
              );
            }
          })}
        </ul>
      </div>
    </div>
  );
}
