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
      <div dir="ltr" class="dropdown dropdown-bottom">
        <div tabindex={0} role="button" class="btn m-1">تجربه</div>
        <ul
          dir="rtl"
          tabindex={0}
          class="dropdown-content z-[3] menu p-2 shadow bg-base-100 rounded-box w-72 gap-2 overflow-y-scroll"
        >
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
    </nav>
  );
}
