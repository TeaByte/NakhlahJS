import { Course, CourseGroup } from "./types.ts";
import { getCourses } from "./course.ts";

// The cache object
export const cache: { courses: (Course | CourseGroup)[], numberOfCourses: number } = { courses: [], numberOfCourses: 0 };

// Populate the cache with all course
// So we don't need to fetch the course on each request!
export async function populateCache(): Promise<void> {
  await getCourses(cache);
}
