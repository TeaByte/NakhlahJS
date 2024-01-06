import { Handlers } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import { PageProps } from "$fresh/server.ts";
import { join } from "$std/path/mod.ts";

import CourseCard from "../components/CourseCard.tsx";
import { getCourse, getGroupOrder } from "../utils/course.ts";
import { Course, CourseGroup } from "../utils/types.ts";

const cache: { merged: (Course | CourseGroup)[] } = { merged: [] };
export const handler: Handlers<{ merged: (Course | CourseGroup)[] }> = {
  async GET(_req, ctx) {
    const courses = await getCourses();
    return ctx.render(courses);
  },
};

export async function getCourses(): Promise<
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

export default function BlogIndexPage(
  props: PageProps<{ merged: (Course | CourseGroup)[] }>,
) {
  const { merged } = props.data;

  return (
    <>
      <Head>
        <meta
          name="description"
          content="وجهتك الأمثل لاكتساب مهارات جافاسكربت بسهولة وفعالية. رحلة تعليمية شيقة تمتد من الأساسيات إلى المستويات المتقدمة"
        />
        <meta
          name="keywords"
          content="Nakhlahjs, Nakhlah, تعلم جافاسكربت, جافاسكربت, تعليم جافاسكربت, كورس جافاسربت, كورس جافاسكربت مجاني, كورس جافاسكربت"
        />
        <meta property="og:title" content="Nakhlahjs" />
        <meta
          property="og:description"
          content="وجهتك الأمثل لاكتساب مهارات جافاسكربت بسهولة وفعالية. رحلة تعليمية شيقة تمتد من الأساسيات إلى المستويات المتقدمة"
        />
      </Head>
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
    </>
  );
}
