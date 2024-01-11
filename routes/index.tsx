import { Head } from "$fresh/runtime.ts";
import { Handlers } from "$fresh/server.ts";
import { PageProps } from "$fresh/server.ts";

import { getCourses } from "../utils/course.ts";
import { Course, CourseGroup } from "../utils/types.ts";
import { cache } from "../utils/course-cache.ts";

import Footer from "../components/Footer.tsx";
import Courses from "../components/Courses.tsx";


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
        <Courses courses={courses} />
      </main>
      <Footer />
    </>
  );
}
