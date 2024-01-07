import { join } from "$std/path/mod.ts";
import { readJson } from "https://deno.land/std@0.66.0/fs/read_json.ts";
import { extract } from "https://deno.land/std@0.151.0/encoding/front_matter.ts";

import { Course, CourseAttributes, CourseGroup } from "../utils/types.ts";

export async function getGroupOrder(
  groupPath: string,
): Promise<{ order: number; label: string } | undefined> {
  try {
    const dataJsonPath = join(groupPath, "_data.json");
    const jsonData = await readJson(dataJsonPath) as {
      order: number;
      label: string;
    };
    return { ...jsonData };
  } catch {
    return undefined;
  }
}

export async function getCourse(
  slug: string,
): Promise<Course | null> {
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

export async function getCourses(
  cache: { merged: (Course | CourseGroup)[] } = { merged: [] },
): Promise<
  { merged: (Course | CourseGroup)[] }
> {
  if (cache.merged.length > 0) {
    return cache;
  }

  console.log("Fetching courses...");
  const files = Deno.readDir("./courses");
  const groups: CourseGroup[] = [];
  const nonGroups: Course[] = [];
  for await (const file of files) {
    if (file.isDirectory) {
      const groupSlug = file.name;
      const groupFiles = Deno.readDir(join("./courses", groupSlug));
      const groupPromises = [];
      for await (const groupFile of groupFiles) {
        if (!groupFile.isDirectory && groupFile.name.endsWith(".md")) {
          const slug = groupFile.name.replace(".md", "");
          const course = await getCourse(join(groupSlug, slug));
          if (course) {
            groupPromises.push(course);
          }
        }
      }
      const groupOrder = await getGroupOrder(join("./courses", groupSlug));
      groups.push({
        courses: groupPromises,
        order: groupOrder?.order,
        label: groupOrder?.label,
      });
    } else if (file.name.endsWith(".md")) {
      const slug = file.name.replace(".md", "");
      const course = await getCourse(slug);
      if (course) {
        nonGroups.push(course);
      }
    }
  }

  const merged: (Course | CourseGroup)[] = [...nonGroups, ...groups];
  merged.sort((a, b) => (a.order || 999) - (b.order || 999));
  cache.merged = merged;
  return cache;
}
