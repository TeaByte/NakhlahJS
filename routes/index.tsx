import { Head } from "$fresh/runtime.ts";
import { Handlers } from "$fresh/server.ts";
import { PageProps } from "$fresh/server.ts";

import { getCourses, getNumberOfCourses } from "../utils/course.ts";
import { Course, CourseGroup } from "../utils/types.ts";
import { cache } from "../utils/course-cache.ts";

import Footer from "../components/Footer.tsx";
import Courses from "../components/Courses.tsx";
import ProgressPageSplit from "../components/ProgressPageSplit.tsx";
import { getCookies } from "$std/http/mod.ts";
import { getStudent } from "../utils/KV.ts";

interface Props {
  courses: (Course | CourseGroup)[];
  completed: string[];
  total: number;
}
export const handler: Handlers<Props> = {
  async GET(_req, ctx) {
    const courses = await getCourses(cache);
    const session = getCookies(_req.headers)["sessionId"];
    const total = getNumberOfCourses(courses.courses);
    if (!session) {
      return ctx.render({
        completed: [],
        total: total,
        courses: courses.courses,
      });
    }
    const completed = (await getStudent(session)).completedCourses;
    return ctx.render({
      completed,
      total,
      courses: courses.courses,
    });
  },
};

export default function BlogIndexPage(
  props: PageProps<Props>,
) {
  const { courses, completed, total } = props.data;
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
      <main className="max-w-screen-md px-4 pt-12 mx-auto mb-6">
        <Courses completed={completed} courses={courses} />
        <ProgressPageSplit completed={completed.length} total={total} />
      </main>
      <Footer />
    </>
  );
}
