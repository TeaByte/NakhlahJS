import { Handlers } from "$fresh/server.ts";
import { extract } from "https://deno.land/std@0.151.0/encoding/front_matter.ts";
import { join } from "$std/path/mod.ts";
import { PageProps } from "$fresh/server.ts";
import { readJson } from "https://deno.land/std@0.66.0/fs/read_json.ts";
import { Course, CourseGroup } from "../utils/course.ts";

export interface CourseAttributes {
  title?: string;
  snippet?: string;
  order?: number;
}

const cache: { merged: (Course | CourseGroup)[] } = { merged: [] };

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

async function getGroupOrder(
  groupPath: string,
): Promise<{ order: number; label: string } | undefined> {
  try {
    const dataJsonPath = join(groupPath, "_data.json");
    const jsonData = await readJson(dataJsonPath) as {
      order: number;
      label: string;
    };
    return { ...jsonData };
  } catch (error) {
    return undefined;
  }
}

export async function getCourses(): Promise<
  { merged: (Course | CourseGroup)[] }
> {
  // if (cache.merged.length > 0) {
  //   return cache;
  // }

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

export const handler: Handlers<{ merged: (Course | CourseGroup)[] }> = {
  async GET(_req, ctx) {
    const courses = await getCourses();
    return ctx.render(courses);
  },
};

export default function BlogIndexPage(
  props: PageProps<{ merged: (Course | CourseGroup)[] }>,
) {
  const { merged } = props.data;

  return (
    <main class="max-w-screen-md px-4 pt-12 mx-auto">
      <h1 class="text-5xl font-bold z-10">المحتوى</h1>
      <section class="flex flex-col gap-2">
        {merged.map((course, index) => {
          if ("courses" in course) {
            return (
              <div class="" key={index}>
                <h2 class="text-3xl font-bold">
                  {course.label}
                </h2>
                <div class="flex flex-col mt-2 pr-3">
                  {course.courses.map((innerCourse) => (
                    <CourseCard key={innerCourse.slug} course={innerCourse} />
                  ))}
                </div>
              </div>
            );
          } else {
            // This is a Course
            return (
              <div class="" key={course.slug}>
                <CourseCard course={course} />
              </div>
            );
          }
        })}
      </section>
    </main>
  );
}

function CourseCard(props: { course: Course }) {
  const { course } = props;
  return (
    <div
      class={`py-4 gray-200 hover:opacity-75 `}
      style={{ order: course.order }}
    >
      <a href={btoa(`/${course.slug}`)}>
        <h3 class="gray-900 font-bold">
          {course.title}
        </h3>
        <div class="text-gray-500 truncate text-ellipsis max-w-[300px] md:max-w-full overflow-hidden">
          {course.snippet}
        </div>
      </a>
    </div>
  );
}
