import { Handlers } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import { PageProps } from "$fresh/server.ts";

import CourseCard from "../components/CourseCard.tsx";
import { getCourses } from "../utils/course.ts";
import { Course, CourseGroup } from "../utils/types.ts";
import { cache, populateCache } from "../utils/course-cache.ts";
import Footer from "../components/Footer.tsx";

populateCache();

export const handler: Handlers<{ merged: (Course | CourseGroup)[] }> = {
  async GET(_req, ctx) {
    const courses = await getCourses(cache);
    return ctx.render(courses);
  },
};

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
        <meta property="og:title" content="نخلة جي أس" />
        <meta
          property="og:description"
          content="وجهتك الأمثل لاكتساب مهارات جافاسكربت بسهولة وفعالية. رحلة تعليمية شيقة تمتد من الأساسيات إلى المستويات المتقدمة"
        />
      </Head>
      <main class="max-w-screen-md px-4 pt-12 mx-auto">
        <h1 class="text-5xl font-bold z-10">المحتوى</h1>
        <section class="flex flex-col gap-2">
          {merged.map((course, index) => {
            // Group of courses
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
              // Single course
              return (
                <div class="" key={course.slug}>
                  <CourseCard course={course} />
                </div>
              );
            }
          })}
        </section>
      </main>
      <Footer />
    </>
  );
}
