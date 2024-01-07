import { cache, populateCache } from "../utils/course-cache.ts";
import { Course } from "../utils/types.ts";

populateCache();

function Collapse({ titile, courses }: { titile: string; courses: Course[] }) {
  return (
    <div
      tabindex={1}
      class="collapse collapse-plus border border-base-300 bg-base-200"
    >
      <input type="checkbox" />
      <div class="collapse-title text-xl font-medium">
        {titile}
      </div>
      <div class="collapse-content">
        {courses.map((course) => (
          <li key={course.slug}>
            <a title={course.title} href={`/${course.slug}`}>{course.title}</a>
          </li>
        ))}
      </div>
    </div>
  );
}

export default function NavBar() {
  return (
    <nav class="bg-base-300 w-full py-4 px-2 md:px-8 flex items-center gap-4">
      <div class="flex items-center flex-1">
        <div class="flex items-center gap-1">
          <img
            title="نخله جي اس"
            alt="Website logo"
            src="/logo.webp"
            class="h-8 w-8"
          />
          <a
            href="/"
            title="نخله جي اس"
            class="text-2xl ml-1 font-bold hover:animate-pulse"
          >
            <div class="flex items-center">
              <span class="text-yellow-500">JS</span>
              <span class="ml-2 font-bold text-2xl">نخلة</span>
            </div>
          </a>
        </div>
      </div>
      <div class="drawer">
        <input
          id="my-drawer-4"
          type="checkbox"
          class="drawer-toggle"
        />
        <div class="drawer-content">
          <label
            for="my-drawer-4"
            class="drawer-button btn btn-active btn-ghost top-[-24px] left-0 absolute"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"
              />
            </svg>
          </label>
        </div>
        <div class="drawer-side z-50">
          <label
            for="my-drawer-4"
            aria-label="close sidebar"
            class="drawer-overlay"
          >
          </label>
          <ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {cache.merged.map((course, index) => {
              if ("courses" in course) {
                return (
                  <Collapse
                    titile={course.label || "بدون عنوان"}
                    courses={course.courses}
                  />
                );
              } else {
                return (
                  <li class="" key={course.slug}>
                    <a title={course.title} href={`/${course.slug}`}>
                      {course.title}
                    </a>
                  </li>
                );
              }
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
