import ProgressCheck from "@/islands/ProgressCheck.tsx";
import { Course } from "../utils/types.ts";

interface CloseProps {
  title: string;
  courses: Course[];
}

export default function Collapse(
  { title, courses }: CloseProps,
) {
  return (
    <div class="collapse collapse-arrow bg-base-300">
      <input type="checkbox" />
      <div class="collapse-title text-xl font-medium">
        {title}
      </div>
      <div class="collapse-content flex flex-col gap-2">
        {courses.map((course) => (
          <div key={course.slug} style={{ order: course.order }}>
            <a
              title={course.title}
              href={`/${course.slug}`}
              class="gray-200 hover:opacity-75 list-none"
            >
              <h3 class="text-gray-500 font-bold items-centerrounded-btn flex gap-1 items-center">
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
