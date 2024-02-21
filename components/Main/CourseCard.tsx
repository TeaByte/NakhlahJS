import { Course } from "@/utils/types.ts";
import ProgressCheck from "@/islands/ProgressCheck.tsx";

interface CourseCardProps {
  course: Course;
}

export default function CourseCard(props: CourseCardProps) {
  const { course } = props;
  return (
    <a
      title={course.title}
      href={`/${course.slug}`}
      className="gray-200 hover:opacity-75 list-none"
      style={{ order: course.order }}
    >
      <h3 className="text-gray-500 font-bold flex gap-1 items-center bg-base-200 rounded-btn px-2 py-4">
        <ProgressCheck slug={course.slug} />
        {course.title}
      </h3>
    </a>
  );
}