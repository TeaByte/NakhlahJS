import { Handlers } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import { PageProps } from "$fresh/server.ts";
import CourseCard from "../components/CourseCard.tsx";
import { getCourses } from "../utils/course.ts";
import { Course, CourseGroup } from "../utils/types.ts";
import { cache } from "../utils/course-cache.ts";
import Footer from "../components/Footer.tsx";

import IconChevronDown from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/chevron-down.tsx";
import Collapse from "../components/Collapse.tsx";

export const handler: Handlers<{ courses: (Course | CourseGroup)[] }> = {
  async GET(_req, ctx) {
    const courses = await getCourses(cache);
    return ctx.render(courses);
  },
};

export default function BlogIndexPage(
  props: PageProps<{ courses: (Course | CourseGroup)[] }>,
) {
  const { courses } = props.data;
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
        <meta property="og:title" content="نخلة جي أس" />
        <meta
          property="og:description"
          content="وجهتك الأمثل لاكتساب مهارات جافاسكربت بسهولة وفعالية. رحلة تعليمية شيقة تمتد من الأساسيات إلى المستويات المتقدمة"
        />
      </Head>
      <main class="max-w-screen-md px-4 pt-12 mx-auto mb-6">
        <h1 class="text-5xl font-bold z-10 mb-2">الاساسيات</h1>
        <section class="flex flex-col">
          {courses.map((course, index) => {
            // Group of courses
            if ("courses" in course) {
              return (
                <div key={index} class="mt-2">
                  <Collapse
                    titile={course.label}
                    courses={course.courses}
                  />
                </div>
              );
            } else {
              // Single course
              return (
                <div key={course.slug}>
                  <CourseCard course={course} />
                </div>
              );
            }
          })}
          <p class="mt-4 text-2xl">نعمل على الدروس القادما...</p>
          <a
            href="https://github.com/TeaByte/NakhlahJS"
            class="text-gray-500 hover:underline"
            target="_blank"
          >
            هل تود المساهمه في الموقع ؟
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
