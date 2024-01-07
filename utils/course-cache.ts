import { Course, CourseGroup } from "./types.ts";
import { getCourses } from "./course.ts";
export const cache: { merged: (Course | CourseGroup)[] } = { merged: [] };

export async function populateCache(): Promise<void> {
  await getCourses(cache);
}
