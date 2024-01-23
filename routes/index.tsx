import { Head } from "$fresh/runtime.ts";
import { Handlers } from "$fresh/server.ts";
import { PageProps } from "$fresh/server.ts";

import { Course, CourseGroup } from "../utils/types.ts";
import { cache } from "../utils/course-cache.ts";

import Footer from "../components/Footer.tsx";
import Courses from "../components/Courses.tsx";
import { getNumberOfCourses } from "@/utils/course.ts";

interface Props {
  courses: (Course | CourseGroup)[];
  total: number;
}
export const handler: Handlers<Props> = {
  async GET(_req, ctx) {
    const courses = cache.courses;
    const total = await getNumberOfCourses();
    return ctx.render({
      total,
      courses: courses,
    });
  },
};

export default function BlogIndexPage(
  props: PageProps<Props>,
) {
  const { courses, total } = props.data;
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
      <main className="max-w-screen-md px-4 pt-8 mx-auto mb-6">
        <Courses total={total} courses={courses} />
      </main>
      <Footer />
    </>
  );
}
