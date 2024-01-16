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
    const completed = (await getStudent(session)).completedCourses;
    const total = getNumberOfCourses(courses.courses);
    console.log(completed, total);
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
      <main className="flex min-w-screen-md w-[75%] pt-12 mx-auto mb-6 max-sm:flex-col-reverse">
        <div className="max-sm:w-full w-1/2 p-4">
          <Courses completed={completed} courses={courses} />
        </div>
        <div className="max-sm:w-full w-1/2 p-4 flex flex-col gap-2">
          <ProgressPageSplit completed={completed.length} total={total} />
        </div>
      </main>
      <Footer />
    </>
  );
}
