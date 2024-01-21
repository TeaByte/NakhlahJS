import ProgressCheck from "@/islands/ProgressCheck.tsx";
import { Course } from "../utils/types.ts";

export default function Collapse(
  { title, courses }: { title: string; courses: Course[] },
) {
  return (
    <div class="collapse collapse-arrow bg-base-300">
      <input type="checkbox" />
      <div class="collapse-title text-xl font-medium">
        {title}
      </div>
      <div class="collapse-content flex flex-col">
        {courses.map((course) => (
          <div key={course.slug}>
            <a
              title={course.title}
              href={`/${course.slug}`}
              class="gray-200 hover:opacity-75 list-none"
              style={{ order: course.order }}
            >
              <h3 class="text-gray-500 font-bold flex gap-1 items-centerrounded-btn mt-2 flex gap-1 items-center">
                <ProgressCheck slug={course.slug} />
                {course.title}
              </h3>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
