import { join } from "$std/path/mod.ts";
import { readJson } from "https://deno.land/std@0.66.0/fs/read_json.ts";
import { extract } from "https://deno.land/std@0.151.0/encoding/front_matter.ts";

import { Course, CourseAttributes, CourseGroup } from "../utils/types.ts";

export async function getGroupJsonData(
  groupPath: string,
): Promise<{ order: number; label: string; lableSlug: string } | undefined> {
  try {
    const dataJsonPath = join(groupPath, "_data.json");
    const jsonData = await readJson(dataJsonPath) as {
      order: number;
      label: string;
      lableSlug: string;
    };
    return { ...jsonData };
  } catch {
    return undefined;
  }
}

export async function getCourse(
  slug: string,
): Promise<Course> {
  const text = await Deno.readTextFile(join("./courses", `${slug}.md`));
  const { attrs, body } = extract(text);
  const courseAttrs = attrs as CourseAttributes;
  const course: Course = {
    slug,
    title: courseAttrs.title || "بدون عنوان",
    content: body || "لايوجد محتوى",
    snippet: courseAttrs.snippet || "لا يوجد",
    order: courseAttrs.order || 999,
  };
  return course;
}

export async function getJson(
  slug: string,
): Promise<[string, string]> {
  const text = await Deno.readTextFile(join("./courses", `${slug}/_data.json`));
  const json: { label: string; lableSlug: string } = JSON.parse(text);
  return [json.lableSlug, json.label];
}

export async function getCourses(
  cache: { courses: (Course | CourseGroup)[] } = { courses: [] },
): Promise<{ courses: (Course | CourseGroup)[] }> {
  if (cache.courses.length > 0) {
    return cache;
  }

  const startTime = performance.now();

  const files = Deno.readDir("./courses");
  const groupPromises: Promise<CourseGroup>[] = [];
  const nonGroupPromises: Promise<Course>[] = [];

  const processGroup = async (groupSlug: string) => {
    const groupFiles = Deno.readDir(join("./courses", groupSlug));
    const groupPromises: Promise<Course>[] = [];

    for await (const groupFile of groupFiles) {
      if (!groupFile.isDirectory && groupFile.name.endsWith(".md")) {
        const slug = groupFile.name.replace(".md", "");
        const coursePromise = getCourse(join(groupSlug, slug));
        groupPromises.push(coursePromise);
      }
    }

    const groupData = await getGroupJsonData(join("./courses", groupSlug));
    const courses = await Promise.all(groupPromises);

    return {
      courses,
      order: groupData?.order || 999,
      label: groupData?.label || "بدون عنوان",
      lableSlug: groupData?.lableSlug || "No Label",
    };
  };

  for await (const file of files) {
    if (file.isDirectory) {
      groupPromises.push(processGroup(file.name));
    } else if (file.name.endsWith(".md")) {
      const slug = file.name.replace(".md", "");
      nonGroupPromises.push(getCourse(slug));
    }
  }

  const [groupOrders, nonGroupCourses] = await Promise.all([
    Promise.all(groupPromises),
    Promise.all(nonGroupPromises),
  ]);

  const merged: (Course | CourseGroup)[] = [...nonGroupCourses, ...groupOrders];
  merged.sort((a, b) => a.order - b.order);

  cache.courses = merged;

  const endTime = performance.now();
  console.log(`Caching data took ${(endTime - startTime) / 1000} seconds`);
  return cache;
}

export function getNumberOfCourses(courses: (Course | CourseGroup)[]) {
  let count = 0;
  for (const course of courses) {
    if ("courses" in course) {
      count += course.courses.length;
    } else {
      count++;
    }
  }
  return count;
} 