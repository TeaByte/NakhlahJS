import { Head } from "$fresh/runtime.ts";
import { Handlers } from "$fresh/server.ts";
import { PageProps } from "$fresh/server.ts";

import { Course, CourseGroup } from "../../utils/types.ts";
import { cache } from "../../utils/course-cache.ts";

import CourseCard from "../../components/CourseCard.tsx";
import Footer from "../../components/Footer.tsx";

import IconChevronDown from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/chevron-down.tsx";
import { getCookies } from "$std/http/mod.ts";
import { getStudent } from "../../utils/KV.ts";
interface Props {
  courses: CourseGroup;
  completed: string[];
}
export const handler: Handlers<Props> = {
  async GET(_req, ctx) {
    let foundCourseGroup: CourseGroup | Course | undefined = undefined;
    const toFind = decodeURIComponent(ctx.params.slug);
    foundCourseGroup = cache.courses.find((c) => {
      return "courses" in c && c.courses.length > 0 &&
        c.lableSlug === toFind;
    });
    const session = getCookies(_req.headers)["sessionId"];
    if (!session) {
      return ctx.render({
        completed: [],
        courses: foundCourseGroup as CourseGroup,
      });
    }
    let completed = (await getStudent(session)).completedCourses;
    if (!foundCourseGroup) return ctx.renderNotFound();
    return ctx.render({
      completed,
      courses: foundCourseGroup as CourseGroup,
    });
  },
};

export default function CoursePage(props: PageProps<Props>) {
  const {courses:foundCourseGroup, completed} = props.data;
  return (
    <>
      <Head>
        <title>نخلة - {foundCourseGroup.label}</title>
        <meta property="og:title" content="نخلة جي أس" />
      </Head>
      <main class="flex flex-col h-full-minus-bar">
        <div class="w-full my-6 grow bg-base-300 rounded-btn flex flex-col justify-center items-center">
          <div>
            <div class="flex gap-1 items-center">
              <h2 class="text-3xl font-bold">
                {foundCourseGroup.label}
              </h2>
              <IconChevronDown />
            </div>
            <div class="flex flex-col mt-2 pr-3">
              {foundCourseGroup.courses.map((innerCourse) => (
                <CourseCard isDone={completed ? completed.includes(innerCourse.slug) : false} key={innerCourse.slug} course={innerCourse} />
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
