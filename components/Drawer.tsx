import ProgressCheck from "@/islands/ProgressCheck.tsx";
import { Course, CourseGroup } from "../utils/types.ts";

import Collapse from "./Collapse.tsx";

import IconLayoutSidebarLeftCollapse from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/layout-sidebar-left-collapse.tsx";
import IconChevronDown from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/chevron-down.tsx";

interface DrawerProps {
  courses: (Course | CourseGroup)[];
}

export default function Drawer(
  { courses }: DrawerProps,
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
          class="drawer-button btn btn-active"
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
        <ul class="menu p-4 w-80 min-h-full bg-base-100 text-base-content gap-1">
          <div class="flex items-center mb-2">
            <p class="text-lg">قائمة الدروس</p>
            <IconChevronDown />
          </div>
          {courses.map((course) => {
            // Group of courses
            if ("courses" in course) {
              return (
                <Collapse
                  key={course.label}
                  title={course.label}
                  courses={course.courses}
                />
              );
            } else {
              // Single course
              return (
                <li key={course.slug}>
                  <a
                    title={course.title}
                    href={`/${course.slug}`}
                    class="gray-200 hover:opacity-75 list-none bg-base-300 rounded-btn py-4"
                    style={{ order: course.order }}
                  >
                    <h3 class="text-gray-500 font-bold flex gap-1 items-center">
                      <ProgressCheck slug={course.slug} />
                      {course.title}
                    </h3>
                  </a>
                </li>
              );
            }
          })}
        </ul>
      </div>
    </div>
  );
}
