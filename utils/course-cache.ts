import { Course, CourseGroup } from "./types.ts";
import { getCourses } from "./course.ts";
export const cache: { courses: (Course | CourseGroup)[] } = { courses: [] };

export async function populateCache(): Promise<void> {
  await getCourses(cache);
}
